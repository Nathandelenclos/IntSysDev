import {Article} from '@/types/article';
import articlesData from '../data/blog/articles.json';

export const getAllArticles = (): Article[] => {
  return articlesData.articles;
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData.articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articlesData.articles.filter(article => article.category === category);
};

export const getArticlesByTag = (tag: string): Article[] => {
  return articlesData.articles.filter(article => article.tags.includes(tag));
};

export const getLatestArticles = (limit: number = 5): Article[] => {
  return [...articlesData.articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}; 