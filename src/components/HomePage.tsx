'use client';

import { useEffect, useState } from 'react';
import CarPostCard from '@/components/CarPostCard';
import Status from './Status';
import Banner from './Banner';
import {Post, User} from '../types/index' 
import NewTechnology from './NewTechnology';


const POSTS_PER_PAGE = 6;

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const tags = ['EV', 'SUV', 'Luxury', 'Hybrid', 'Sedan'];
  const carImages = [
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

  const filteredPosts = posts.filter((post) => {
    const matchesTitle = post.title.toLowerCase().includes(search.toLowerCase());
    const tag = tags[post.id % tags.length];
    const matchesTag = selectedTag ? tag === selectedTag : true;
    return matchesTitle && matchesTag;
  });

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users'),
        ]);
        const postsData = await postsRes.json();
        const usersData = await usersRes.json();
        setPosts(postsData.slice(0, 12)); 
        setUsers(usersData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Status type="loading" message="Loading car blogs..." />;
  if (error) return <Status type="error" message="Unable to fetch data." />;
  if (posts.length === 0) return <Status type="empty" message="No blogs available." />;

  return (
    <div>
        <Banner/> 
    
    <section className="max-w-6xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h1 className="text-3xl font-bold">Latest Car Blogs</h1>

        <div className="flex items-center gap-2 flex-wrap justify-end w-full sm:w-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search blog titles..."
            className="p-2 border rounded"
          />
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTag(t === selectedTag ? '' : t)}
              className={`px-3 py-1 text-sm rounded border ${
                selectedTag === t ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.length === 0 ? (
          <Status type="empty" message="No matching blogs." />
        ) : (
          paginatedPosts.map((post) => {
            const author = users[post.id % users.length];
            const tag = tags[post.id % tags.length];
            return (
              <CarPostCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.body.slice(0, 100)}
                author={author?.name || 'Unknown'}
                imageUrl={carImages[post.id % carImages.length]}
                tag={tag}
                likes={(post.id * 7) % 100}
                rating={Math.min(5, 3 + (post.id % 3) + 0.2)}
              />
            );
          })
        )}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage * POSTS_PER_PAGE >= filteredPosts.length}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
    <NewTechnology/>
    </div>
  );
}