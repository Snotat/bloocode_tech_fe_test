
'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const NewsCard: React.FC<{ article:any}> = ({ article }) => {
  return (
    <div className="flex-none w-72 m-2 md:w-80 lg:w-96 bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
      <div className="relative h-48 w-full">
        <img
          src={article?.banner_image}
          alt={article?.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
      
        />
        <div className="absolute top-3 left-3">
          <span className="bg-black/20 border-[1px] border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase shadow-md">
            {article?.category.category_name}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
          {article?.title}
        </h3>
      </div>
    </div>
  );
};

const LatestNews: React.FC = () => {
       const [articles, setArticles] = useState<any>()
      useEffect(() => {
        const fetchAndSetTopStories = async () => {
          try { 
    
          await axios.get('https://api.agcnewsnet.com/api/general/stories/latest-stories?page=1&per_page=7').then((res)=>{
            console.log(res.data.data.data)
    setArticles(res.data.data.data)
            })
         
          } catch (err) {
            console.error('Failed to fetch top stories:', err);
          } finally {
          }
        };
    
        fetchAndSetTopStories();
      }, [])


  return (
    <section className="w-full mx-0 px-4 py-8 md:py-12 bg-white">
    
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[18px] font-bold text-gray-900 tracking-tight flex items-center">
          <span className="w-2 h-6 text-[10px] bg-purple-700 mr-2 rounded-sm"></span>
          LATEST NEWS
        </h2>
      
      </div>

      <div className="flex overflow-x-auto gap-2 max-md:gap-0 pb-1 scrollbar-hide">
        {articles?.map((article:any) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {[]?.map((ad) => (<></>
        //   <a
        //     key={ad.id}
        //     href={ad.link}
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     className="block w-full h-32 md:h-40 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl"
        //   >
        //     <img
        //       src={ad.imageUrl}
        //       alt={ad.altText}
        //       className="w-full h-full object-cover"
           
        //     />
        //   </a>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
