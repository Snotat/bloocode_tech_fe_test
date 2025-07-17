import React from 'react';

interface Article {
  id: string;
  category?: string; 
  title: string;
  imageUrl?: string;
  excerpt?: string;
  author?: string;
  timeAgo?: string;
}

interface Advertisement {
  id: string;
  imageUrl: string;
  altText: string;
  link: string;
}

const featuredArticles: Article[] = [
  {
    id: 'f1',
    title: 'Dozens of Russian tourists were recently allowed to visit North Korea. Here’s what they saw',
    imageUrl: 'https://placehold.co/600x400/334155/ffffff?text=North+Korea+Tourists', // Placeholder
    author: 'Opeoluwa Joseph',
    timeAgo: 'Posted 15 mins ago',
  },
  {
    id: 'f2',
    category: 'Opinion',
    title: 'Scrap Constituency Projects',
    imageUrl: 'https://placehold.co/600x400/475569/ffffff?text=Gavel+and+Books', // Placeholder
    author: 'Opeoluwa Joseph',
    timeAgo: 'Posted 15 mins ago',
  },
];

const additionalStories: Article[] = [
  {
    id: 'a1',
    title: 'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
  },
  {
    id: 'a2',
    title: 'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
  },
  {
    id: 'a3',
    title: 'Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest',
  },
  {
    id: 'a4',
    title: 'Foden Sparkles As Man City Crush Spineless Man United',
  },
  {
    id: 'a5',
    title: 'Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog',
  },
];

const advertisements: Advertisement[] = [
  {
    id: 'ad3',
    imageUrl: 'https://placehold.co/300x400/0284c7/ffffff?text=Upgrade+to+smartphone+ad', // Placeholder
    altText: 'Upgrade to a smartphone and enjoy 100% bonus data for 3 months',
    link: '#',
  },
  {
    id: 'ad4',
    imageUrl: 'https://placehold.co/300x300/dc2626/ffffff?text=Dominos+Pizza+Ad', // Placeholder
    altText: 'Domino\'s Pizza Buy 1 Get 1 Free',
    link: '#',
  },
];

const FeaturedArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      
      />
      {article.category && (
        <div className="absolute top-3 left-3">
          <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {article.category}
          </span>
        </div>
      )}
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white z-10">
        <h3 className="text-lg md:text-xl font-bold leading-tight mb-2">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-sm md:text-base text-gray-200 mb-2">
            {article.excerpt}
          </p>
        )}
        <div className="flex items-center text-xs md:text-sm text-gray-300">
          {article.author && <span className="mr-3">&bull; {article.author}</span>}
          {article.timeAgo && <span className="flex items-center">
            <span className="w-1 h-1 bg-gray-300 rounded-full mr-2"></span>
            {article.timeAgo}
          </span>}
        </div>
        <a href="#" className="mt-2 inline-block text-blue-300 hover:underline text-xs">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

const MoreStoriesListItem: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <li className="flex items-start py-2">
      <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2 mr-3"></span>
      <a href="#" className="flex-grow text-gray-800 hover:text-red-600 font-medium text-base md:text-lg leading-snug transition-colors duration-200">
        {article.title}
      </a>
    </li>
  );
};

const AdvertisementBanner: React.FC<{ ad: Advertisement }> = ({ ad }) => {
  return (
    <a
      href={ad.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.005] hover:shadow-xl"
    >
      <img
        src={ad.imageUrl}
        alt={ad.altText}
        className="w-full h-full object-cover"
       
      />
    </a>
  );
};

const FeaturedStories: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-white">
      <div className="flex items-center mb-8">
        <span className="w-2 h-6 bg-purple-700 mr-2 rounded-sm"></span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          FEATURED STORIES
        </h2>
        <a href="#" className="ml-3 text-gray-600 hover:text-purple-700 transition-colors duration-200">
          &gt;
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="md:col-span-1">
            <FeaturedArticleCard article={featuredArticles[0]} />
          </div>
<div className="md:col-span-1 flex flex-col">
            <FeaturedArticleCard article={featuredArticles[1]} />
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                MORE STORIES
              </h3>
              <ul className="space-y-3">
                {additionalStories.map((article) => (
                  <MoreStoriesListItem key={article.id} article={article} />
                ))}
              </ul>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default FeaturedStories;
