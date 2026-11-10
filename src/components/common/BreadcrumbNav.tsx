import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { getBreadcrumbsForRoute, getBackLinkForRoute } from '../../utils/breadcrumb';
import { ArrowLeft } from 'lucide-react';

export const BreadcrumbNav: React.FC = () => {
  const { route, navigateTo } = useNavigation();

  const crumbs = getBreadcrumbsForRoute(route);
  const backLink = getBackLinkForRoute(route);

  // If no breadcrumbs apply to this route, render nothing
  if (!crumbs || crumbs.length === 0) {
    return null;
  }

  return (
    <aside 
      aria-label="Location context"
      className="pt-[68px] sm:pt-[76px] bg-[#0E0E0E] border-b border-[#222222] text-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Semantic breadcrumb trail */}
        <nav aria-label="Breadcrumb" className="min-w-0">
          <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[11px] tracking-[0.14em] uppercase font-medium">
            {crumbs.map((crumb, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <li key={`${crumb.label}-${idx}`} className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  {idx > 0 && (
                    <span aria-hidden="true" className="text-[#4A453F] text-[10px] select-none">
                      /
                    </span>
                  )}
                  {isLast || !crumb.route ? (
                    <span 
                      aria-current={isLast ? 'page' : undefined}
                      className="text-[#F4F1EA] font-normal truncate max-w-[200px] sm:max-w-xs md:max-w-md"
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <button
                      onClick={() => navigateTo(crumb.route!, crumb.params)}
                      className="text-[#8A7654] hover:text-[#F4F1EA] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8A7654]"
                    >
                      {crumb.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Optional quick back link */}
        {backLink && (
          <button
            onClick={() => navigateTo(backLink.route, backLink.params)}
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-[#8E8A83] hover:text-[#F4F1EA] transition-colors shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8A7654]"
            aria-label={backLink.label}
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#8A7654]" aria-hidden="true" />
            <span>{backLink.label}</span>
          </button>
        )}
      </div>
    </aside>
  );
};
