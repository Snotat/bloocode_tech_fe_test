import React from 'react';

interface Article {
  id: string;
  title: string;
  imageUrl?: string;
  excerpt?: string; 
  author?: string; 
  timeAgo?: string; 
}

const mainArticle: Article = {
  id: 'p1',
  title: 'Falana Asks FG To Review Fuel Subsidy Removal',
  imageUrl: 'https://placehold.co/1000x600/374151/ffffff?text=Fuel+Pump',
  excerpt: 'Human rights lawyer Femi Falana (SAN) wants the Federal Government to review the fuel subsidy removal policy owing to claims that Nigeria is still paying for it.',
  author: 'Opeoluwa Joseph',
  timeAgo: 'Posted 15 mins ago',
};

const smallArticles: Article[] = [
  {
    id: 'sp1',
    title: 'Foden Sparkles As Man City Crush Spineless Man United',
    imageUrl: 'https://placehold.co/100x60/9ca3af/ffffff?text=Football', 
  },
  {
    id: 'sp2',
    title: 'Foden Sparkles As Man City Crush Spineless Man United',
    imageUrl: 'https://placehold.co/100x60/9ca3af/ffffff?text=Football', 
  },
  {
    id: 'sp3',
    title: 'Foden Sparkles As Man City Crush Spineless Man United',
    imageUrl: 'https://placehold.co/100x60/9ca3af/ffffff?text=Football', 
  },
  {
    id: 'sp4',
    title: 'Foden Sparkles As Man City Crush Spineless Man United',
    imageUrl: 'https://placehold.co/100x60/9ca3af/ffffff?text=Football', 
  },
  {
    id: 'sp5',
    title: 'Foden Sparkles As Man City Crush Spineless Man United',
    imageUrl: 'https://placehold.co/100x60/9ca3af/ffffff?text=Football', 
  },
];

const MainCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="relative w-full h-96 md:h-[450px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.005]">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
       
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-10">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-base md:text-lg text-gray-200 mb-3">
            {article.excerpt}
          </p>
        )}
        <div className="flex items-center text-sm md:text-base text-gray-300">
          {article.author && <span className="mr-3">&bull; {article.author}</span>}
          {article.timeAgo && <span className="flex items-center">
            <span className="w-1 h-1 bg-gray-300 rounded-full mr-2"></span>
            {article.timeAgo}
          </span>}
        </div>
        <a href="#" className="mt-4 inline-block text-blue-300 hover:underline text-sm md:text-base">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

const SmalllCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <li className="flex items-center space-x-4 py-2">
      <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
      <a href="#" className="flex-grow text-gray-800 hover:text-red-600 font-medium text-base md:text-lg leading-snug transition-colors duration-200">
        {article.title}
      </a>
      <div className="flex-shrink-0 w-24 h-16 rounded-md overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
      
        />
      </div>
    </li>
  );
};


const OtherNews: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12 bg-white">
    
      <div className="flex items-center mb-8">
        <span className="w-2 h-6 bg-purple-700 mr-2 rounded-sm"></span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          POLITICS
        </h2>
        <a href="#" className="ml-3 text-gray-600 hover:text-purple-700 transition-colors duration-200">
          &gt;
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
        <div className="lg:col-span-2">
          <MainCard article={mainArticle} />
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
            MORE STORIES
          </h2>
          <ul className="space-y-4">
            {smallArticles.map((article) => (
              <SmalllCard key={article.id} article={article} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OtherNews;
