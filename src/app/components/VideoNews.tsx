import React from 'react';

interface VideoArticle {
  id: string;
  category: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const videoArticles: VideoArticle[] = [
  {
    id: 'v1',
    category: 'World News',
    title: 'US storm: Massive blizzard hits California and Nevada',
    thumbnailUrl: 'https://placehold.co/600x337/334155/ffffff?text=Video+Thumbnail+1', 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'v2',
    category: 'World News',
    title: 'US storm: Massive blizzard hits California and Nevada',
    thumbnailUrl: 'https://placehold.co/600x337/475569/ffffff?text=Video+Thumbnail+2',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'v3',
    category: 'World News',
    title: 'US storm: Massive blizzard hits California and Nevada',
    thumbnailUrl: 'https://placehold.co/600x337/64748b/ffffff?text=Video+Thumbnail+3',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'v4',
    category: 'World News',
    title: 'US storm: Massive blizzard hits California and Nevada',
    thumbnailUrl: 'https://placehold.co/600x337/334155/ffffff?text=Video+Thumbnail+4',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'v5',
    category: 'World News',
    title: 'US storm: Massive blizzard hits California and Nevada',
    thumbnailUrl: 'https://placehold.co/600x337/475569/ffffff?text=Video+Thumbnail+5',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'v6',
    category: 'World News',
    title: 'US storm: Massive blizzard hits California and Nevada',
    thumbnailUrl: 'https://placehold.co/600x337/64748b/ffffff?text=Video+Thumbnail+6', 
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

const VideoCard: React.FC<{ video: VideoArticle }> = ({ video }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
      <div className="relative w-full aspect-video">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-200">
          <svg
            className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 transition-opacity duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {video.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
          {video.title}
        </h3>
        <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-600 hover:underline text-sm font-medium">
          Watch Video &rarr;
        </a>
      </div>
    </div>
  );
};

const VideoNews: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight flex items-center">
          <span className="w-2 h-6 bg-purple-700 mr-2 rounded-sm"></span>
          NEWS IN VIDEOS
        </h2>
        <a href="#" className="text-blue-600 hover:underline font-medium text-base md:text-lg transition-colors duration-200">
          View more &gt;
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {videoArticles.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoNews;
