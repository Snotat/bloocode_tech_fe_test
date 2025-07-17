'use client';
import React from 'react';
interface MissedArticle {
  id: string;
  title: string;
  date: string;
  category: string;
}
interface Advertisement {
  id: string;
  imageUrl: string;
  altText: string;
  link: string;
}

const missedArticles: MissedArticle[] = [
  {
    id: 'm1',
    title: 'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
    date: 'Feb 29, 2024',
    category: 'Finance',
  },
  {
    id: 'm2',
    title: 'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
    date: 'Feb 29, 2024',
    category: 'Finance',
  },
  {
    id: 'm3',
    title: 'Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest',
    date: 'Feb 29, 2024',
    category: 'Finance',
  },
  {
    id: 'm4',
    title: 'Foden Sparkles As Man City Crush Spineless Man United',
    date: 'Feb 29, 2024',
    category: 'Finance',
  },
];

const newsletterAd: Advertisement = {
  id: 'ad5',
  imageUrl: 'https://placehold.co/600x200/ff00ff/ffffff?text=Betand+Ad',
  altText: 'Betand: Register to get a 100% welcome bonus up to N100,000',
  link: '#',
};

const MissedArticleCard: React.FC<{ article: MissedArticle }> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg p-4 transition-transform duration-300 hover:scale-[1.01] hover:shadow-md cursor-pointer">
      <div className="flex items-center mb-2">
        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
          <a href="#" className="hover:text-red-600">
            {article.title}
          </a>
        </h3>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <span className="mr-2">{article.date}</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
        <span>{article.category}</span>
      </div>
    </div>
  );
};


const NewsForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Subscription form submitted!');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
      <div className="mb-4">
        {/* Simple email icon */}
        <svg
          className="w-12 h-12 text-gray-700 mx-auto"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 6C22 5.44772 21.5523 5 21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V6ZM20 7.23859L12.5001 14.7386L5 7.23859V17H20V7.23859Z" />
        </svg>
      </div>
      <p className="text-gray-700 text-lg mb-4">
        Get the latest news and stories from around Africa directly into your inbox daily.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 text-gray-800"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md"
        >
          Get Me In
        </button>
      </form>
    </div>
  );
};

const AdBanner: React.FC<{ ad: Advertisement }> = ({ ad }) => {
  return (
    <a
      href={ad.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-auto rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.005] hover:shadow-xl"
    >
      <img
        src={ad.imageUrl}
        alt={ad.altText}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/600x200/cccccc/333333?text=Ad+Image+Error`;
          e.currentTarget.onerror = null;
        }}
      />
    </a>
  );
};

const MissedStory: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12 bg-gray-50">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center">
          <span className="w-2 h-6 bg-purple-700 mr-2 rounded-sm"></span>
          STORIES YOU MAY HAVE MISSED
        </h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
            &larr;
          </button>
          <button className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200">
            &rarr;
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
        {missedArticles.map((article) => (
          <MissedArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="lg:col-span-1">
          <NewsForm />
        </div>
       
      </div>
    </section>
  );
};

export default MissedStory;
