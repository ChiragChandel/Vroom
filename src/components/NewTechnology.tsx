import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Status from './Status';
import { Post, User } from '../types/index';


const TechCard = ({ tech, user }: { tech: Post; user: User }) => {
  const techImages = [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&h=300&fit=crop&auto=format'
  ];

  const readTime = `${3 + (tech.id % 3)} Min Read`;
  const imageUrl = techImages[tech.id % techImages.length];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt={tech.title}
          className="w-full h-24 sm:h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-black dark:text-white">
          {tech.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 sm:line-clamp-3">
          {tech.body.slice(0, 100)}...
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium">{user?.name || 'Unknown'}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
};


const NewTechnology = () => {
  const [techPosts, setTechPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users'),
        ]);
        const postsData = await postsRes.json();
        const usersData = await usersRes.json();
        
        
        const techPosts = postsData.slice(0, 12).map((post: Post) => ({
          ...post,
          title: generateTechTitle(post.id)
        }));
        
        setTechPosts(techPosts);
        setUsers(usersData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const generateTechTitle = (id: number) => {
    const techTitles = [
    'AI Copilot for Driving Assistance',
    'Solid-State EV Batteries Upgrade',
    'Neural-Based Self-Driving Systems',
    '5G V2X Car Connectivity',
    'EVs with Green Manufacturing',
    'AR HUDs in Car Displays',
    'Smart Traffic via AI Signals',
    'Edge-Powered V2X Networks',
    'Mixed Reality Car Dashboards',
    'Blockchain Car Service Logs',
    'Secure Smart Car Cyber Layer',
    'Sensor-Based Predictive Maintenance'
    ]
    return techTitles[id % techTitles.length];
  };

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 2;
      return 4;
    }
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, techPosts.length - visibleCount);

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + visibleCount, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - visibleCount, 0));
  };

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto mt-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black dark:text-white">New Technology</h2>
        </div>
        <Status type="loading" message="Loading technology posts..." />
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-6xl mx-auto mt-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black dark:text-white">New Technology</h2>
        </div>
        <Status type="error" message="Unable to fetch technology posts." />
      </section>
    );
  }

  if (techPosts.length === 0) {
    return (
      <section className="max-w-6xl mx-auto mt-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black dark:text-white">New Technology</h2>
        </div>
        <Status type="empty" message="No technology posts available." />
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">New Technology</h2>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${(currentIndex / techPosts.length) * 100}%)`,
              width: `${techPosts.length * (100 / visibleCount)}%`
            }}
          >
            {techPosts.map((tech) => {
              const user = users[tech.userId - 1];
              return (
                <div 
                  key={tech.id} 
                  className="px-2 flex-shrink-0"
                  style={{ width: `${100 / techPosts.length}%` }}
                >
                  <TechCard tech={tech} user={user} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(techPosts.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleCount)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                Math.floor(currentIndex / visibleCount) === index
                  ? 'bg-blue-600 dark:bg-blue-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewTechnology;












