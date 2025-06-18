import React from 'react';
import Image from 'next/image';
import { Article } from '../types/article';

interface ArticleContentProps {
  article: Article;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="flex items-center gap-4 mb-6 text-gray-600">
        <span>Par {article.author}</span>
        <span>•</span>
        <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('fr-FR')}</time>
        <span>•</span>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
          {article.category}
        </span>
      </div>
      {article.imageUrl && (
        <div className="relative w-full h-64 mb-6">
          <Image 
            src={article.imageUrl} 
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div 
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <div className="mt-6 flex gap-2">
        {article.tags.map((tag) => (
          <span 
            key={tag}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ArticleContent; 