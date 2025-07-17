'use client'

import axios from "axios";
import { useEffect, useState } from "react";


export default function TopStories() {
 

interface Article {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
}

const mainArticle: Article = {
  id: '1',
  category: 'LATEST TODAY',
  title: 'Putin promises grains, debt write-off as Russia seeks Africa allies',
  imageUrl: 'https://via.placeholder.com/1200x800/d1d5db/4b5563?text=Main+News+Image'
}

const sideArticles: Article[] = [
  {
    id: '2',
    category: 'NEWS TODAY',
    title: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
    imageUrl: 'https://via.placeholder.com/600x400/9ca3af/374151?text=Small+News+1', 
  },
  {
    id: '3',
    category: 'NEWS TODAY',
    title: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
    imageUrl: 'https://via.placeholder.com/600x400/9ca3af/374151?text=Small+News+2', 
  },
  {
    id: '4',
    category: 'NEWS TODAY',
    title: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
    imageUrl: 'https://via.placeholder.com/800x500/d1d5db/4b5563?text=Medium+News', 
  },
];
const [articles, setArticles] = useState<any>()
  useEffect(() => {
    const fetchAndSetTopStories = async () => {
      try { 

      await axios.get('https://api.agcnewsnet.com/api/general/top-stories').then((res)=>{
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
  

     <div className="w-full mx-auto px-4 py-8 md:py-12 bg-white">
      <h2 className="text-[28px] font-bold text-gray-900 mb-8 md:mb-10 tracking-tight">
        TOP STORIES
      </h2>

      <div className="w-full flex max-md:flex-col flex-row gap-6">
        <div className="w-[50%] max-md:w-[100%]  relative min-h-fit rounded-lg overflow-hidden shadow-lg max-md:shadow-none transform transition-transform duration-300 hover:scale-[1.01] max-md:flex-col">
          <img
            src={articles?.[0].story.banner_image}
            alt={articles?.[0].story.description}
            className="absolute inset-0 w-full max-md:relative max-md:aspect-video  object-cover brightness-75  max-md:border-[1px] h-full border-gray-100  max-md:shadow-md rounded-lg"
          />
          <div className="absolute max-md:relative bottom-0 left-0 p-6 md:p-8 max-md:px-0 text-white max-md:text-black z-10">
            <span className="text-sm font-bold uppercase text-purple-500 px-3 max-md:px-0 py-1 rounded-full mb-2 inline-block">
              {articles?.[0].story.category.category_name}
            </span>
            <h3 className="text-2xl font-semibold leading-tight">
              {articles?.[0].story.title}
            </h3>
           
          </div>
          <div className="absolute max-md:hidden inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        </div>

        <div className="flex flex-row gap-4 flex-wrap max-md:flex-wrap  max-md:w-[100%] w-[50%]">
       
            {articles?.slice(0, 3).map((article:any) => (
              <div
                key={article?.story.id}
                className="relative w-fit flex flex-1 min-w-[300px] h-64 rounded-lg overflow-hidden shadow-md max-md:shadow-none max-md:flex-row transform transition-transform duration-300 hover:scale-[1.02] gap-3 align-top max-md:h-fit "
              >
                <img
                  src={article?.story?.banner_image}
                  alt={article?.story?.title}
                  className="absolute max-md:relative max-md:shadow-md rounded-lg inset-0 w-full h-full max-md:w-[40%] object-cover brightness-75  border-[1px] border-gray-100 aspect-square"
                />
                <div className="absolute max-md:relative max-md:w-[60%]  bottom-0 left-0 p-4 max-md:p-0 text-white max-md:text-black  z-10">
                  <span className="text-sm font-bold uppercase text-purple-500 px-3 max-md:px-0  py-1 rounded-full mb-2 inline-block">
                    {article?.story?.category?.category_name}
                  </span>
                  <h3 className="text-[20px] max-md:text-[14px] font-bold max-md:font-light leading-tight">
                    {article?.story?.title}
                  </h3>
                
                </div>
                <div className="absolute max-md:hidden inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              </div>
            ))}
         
        </div>
      </div>
    </div>
  );
}
