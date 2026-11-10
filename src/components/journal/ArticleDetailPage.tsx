import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { JOURNAL_ARTICLES } from '../../data/tglcData';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Share2, BookOpen } from 'lucide-react';

interface ArticleDetailPageProps {
  articleSlug?: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ articleSlug }) => {
  const { navigateTo, openIntroductionModal } = useNavigation();

  const article = JOURNAL_ARTICLES.find((a) => a.slug === articleSlug) || JOURNAL_ARTICLES[0];
  const relatedArticles = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="bg-[#0B0B0B] text-[#F4F1EA] pt-10 sm:pt-14 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Navigation / Back Button */}
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#8A7654] border-b border-[#222222] pb-4">
          <button
            onClick={() => navigateTo('journal')}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Journal</span>
          </button>
          <span>{article.category}</span>
        </div>

        {/* Article Header */}
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-xs tracking-wider uppercase text-[#8A7654]">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.publishDate}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#F4F1EA] leading-tight text-balance">
            {article.title}
          </h1>

          <p className="font-serif italic text-xl text-[#D9D4CA] leading-relaxed">
            {article.subtitle}
          </p>

          <div className="pt-2 text-xs text-[#8E8A83] flex items-center justify-center gap-2">
            <span>By {article.author}</span>
            <span>·</span>
            <span>{article.authorRole}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-[16/10] w-full overflow-hidden bg-[#161616] border border-[#222222]">
          <img
            src={article.heroImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Editorial Body Prose */}
        <article className="max-w-2xl mx-auto space-y-8 text-base sm:text-lg text-[#D9D4CA] leading-[1.8] font-light">
          {article.contentParagraphs.map((para, i) => (
            <p
              key={i}
              className={i === 0 ? "first-letter:text-5xl first-letter:font-serif first-letter:text-[#F4F1EA] first-letter:mr-3 first-letter:float-left first-letter:leading-none" : ""}
            >
              {para}
            </p>
          ))}

          {/* Pull Quote */}
          {article.pullQuote && (
            <div className="my-10 py-8 px-6 sm:px-10 border-y border-[#262626] bg-[#0E0E0E] text-center space-y-3">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#F4F1EA] leading-relaxed">
                “{article.pullQuote}”
              </p>
              <span className="text-xs uppercase tracking-widest text-[#8A7654] block">— TGLC Editorial Notes</span>
            </div>
          )}

          {/* Subheadings and Sections if present */}
          {article.subheadings && article.subheadings.map((sub, idx) => (
            <div key={idx} className="space-y-4 pt-6">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] pt-2">
                {sub.title}
              </h3>
              {sub.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          ))}
        </article>

        {/* Author Footer Card */}
        <div className="max-w-2xl mx-auto p-6 bg-[#121212] border border-[#222222] flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-[#333333] flex items-center justify-center font-serif text-xl text-[#8A7654] shrink-0">
            {article.author.charAt(0)}
          </div>
          <div>
            <h4 className="font-serif text-lg text-[#F4F1EA]">{article.author}</h4>
            <p className="text-xs text-[#8A7654]">{article.authorRole} at The Global Luxury Consortium</p>
            <p className="text-xs text-[#9C968A] mt-1 leading-relaxed">
              Contributing regularly on private lifestyle management, cultural access, and European travel architecture.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="pt-12 border-t border-[#222222]">
          <h3 className="font-serif text-2xl text-[#F4F1EA] mb-6">Further Reading from The Journal</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => navigateTo('journal-article', { articleSlug: rel.slug })}
                className="p-5 bg-[#121212] border border-[#222222] hover:border-[#444444] cursor-pointer transition-colors"
              >
                <span className="text-[10px] uppercase tracking-wider text-[#8A7654] block mb-1">{rel.category}</span>
                <h4 className="font-serif text-xl text-[#F4F1EA] mb-2">{rel.title}</h4>
                <p className="text-xs text-[#9C968A] line-clamp-2 leading-relaxed">{rel.excerpt}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
