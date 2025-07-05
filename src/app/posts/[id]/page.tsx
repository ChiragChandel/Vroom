import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function PostDetail({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);
  
  if (isNaN(postId)) {
    return notFound();
  }

  // Same data sources as HomePage
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

  try {
    // Fetch post and user data
    const [postRes, usersRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
      fetch('https://jsonplaceholder.typicode.com/users')
    ]);

    if (!postRes.ok) {
      return notFound();
    }

    const post: Post = await postRes.json();
    const users: User[] = await usersRes.json();

    // Generate dynamic data using same logic as HomePage
    const author = users[post.id % users.length];
    const tag = tags[post.id % tags.length];
    const imageUrl = carImages[post.id % carImages.length];
    const likes = (post.id * 7) % 100;
    const rating = 3 + (post.id % 3) + 0.2;
    const description = post.body.slice(0, 100);

    return (
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-96 w-full">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-contain object-center"
          />


          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-6 left-6 z-10">
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
              <div className="flex items-center gap-4 text-[#B0B0B0] text-sm">
                <span>❤️ {likes}</span>
                <span>⭐ {rating.toFixed(1)}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-[#E0E0E0] mb-4 leading-relaxed">
              {description}...
            </p>
            
            <p className="text-[#B0B0B0] text-sm">
              By <span className="text-white font-medium">{author?.name || 'Unknown'}</span>
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-gradient-to-b from-[#2A2A2A] to-[#252525] rounded-2xl p-8 mb-8"
               style={{
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(64, 64, 64, 0.3)'
               }}>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                {post.body}
              </p>
            </div>
          </div>

          {/* Car Specs Section */}
          <div className="bg-gradient-to-b from-[#2A2A2A] to-[#252525] rounded-2xl p-8 mb-8"
               style={{
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(64, 64, 64, 0.3)'
               }}>
            <h2 className="text-2xl font-semibold mb-6 text-white">Car Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-600">
                <span className="text-[#B0B0B0]">Model Year</span>
                <span className="text-white font-medium">2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-600">
                <span className="text-[#B0B0B0]">Category</span>
                <span className="text-white font-medium">{tag}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-600">
                <span className="text-[#B0B0B0]">Top Speed</span>
                <span className="text-white font-medium">220 km/h</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-600">
                <span className="text-[#B0B0B0]">Rating</span>
                <span className="text-white font-medium">⭐ {rating.toFixed(1)}/5</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-600">
                <span className="text-[#B0B0B0]">Community Likes</span>
                <span className="text-white font-medium">❤️ {likes}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-600">
                <span className="text-[#B0B0B0]">Price Range</span>
                <span className="text-white font-medium">$45,000 - $85,000</span>
              </div>
            </div>
          </div>

          {/* Related Posts or CTA */}
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore More Cars
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching post data:', error);
    return notFound();
  }
}