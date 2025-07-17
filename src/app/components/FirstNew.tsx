'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import demo from '../assets/images/20221107_173033_0000.png'

const editorPickArticle = {
  id: 'ep1',
  category: "Editor's Pick",
  title: "Dangote Refinery's second crude oil shipment leaves US for Nigeria",
  imageUrl: 'https://placehold.co/1200x800/27272a/ffffff?text=Dangote+Refinery', 
  excerpt: 'First cargo to arrive next week',
  author: 'Opeoluwa Joseph',
};

const moreStories = [
  {
    id: 'ms1',
    title: 'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
  },
  {
    id: 'ms2',
    title: 'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
  },
  {
    id: 'ms3',
    title: 'Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest',
  },
  {
    id: 'ms4',
    title: 'Foden Sparkles As Man City Crush Spineless Man United',
  },
  {
    id: 'ms5',
    title: 'Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog',
  },
];

const EditorPicked: React.FC<{ article:any}> = ({ article }) => {
    
  return (
    <div className="relative w-full h-96 md:h-[550px] rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.005]">
      <img
        src={article?.story?.banner_image||demo}
        alt={article?.story.title}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-black-/20 border-[1px] border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
          Editor's Pick'
        </span>
      </div>
      <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-10">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
          {article?.story.title}
        </h3>
        {article?.story.subtitle&& (
          <p className="text-base md:text-lg text-gray-200 mb-3">
            {article?.story.subtitle}
          </p>
        )}
        {article?.story.author && (
          <p className="text-sm md:text-base text-gray-300">
            &bull; {article?.story.author}
          </p>
        )}
      
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
    </div>
  );
};

const MoreStory: React.FC<{ article:any }> = ({ article }) => {
  return (
    <li className="flex items-start py-2">
      <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2 mr-3"></span>
      <a href="#" className="text-gray-800 hover:text-red-600 font-medium text-base md:text-lg leading-snug transition-colors duration-200">
        {article.title}
      </a>
    </li>
  );
};
const FirstNews: React.FC = () => {
         const [articles, setArticles] = useState<any>()
      useEffect(() => {
        const fetchAndSetTopStories = async () => {
          try { 
    
          await axios.get('https://api.agcnewsnet.com/api/general/editor-picks?page=1&per_page=7').then((res)=>{
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
    <div className="container mx-auto px-4 py-8 md:py-12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

        <div className="lg:col-span-2">
        <EditorPicked article={articles[0]} />
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
            MORE STORIES
          </h2>
          <ul className="space-y-4">
            {moreStories.map((article) => (
              <MoreStory key={article.id} article={article} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstNews;
