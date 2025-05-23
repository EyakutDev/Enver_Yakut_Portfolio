import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaTags, FaSearch } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks for state management and side effects in your functional components.',
      date: 'May 15, 2023',
      author: 'Enver Yakut',
      categories: ['react', 'javascript'],
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 2,
      title: 'Building Responsive Layouts with Tailwind CSS',
      excerpt: 'Discover how to create beautiful and responsive websites quickly using the utility-first CSS framework.',
      date: 'April 22, 2023',
      author: 'Enver Yakut',
      categories: ['css', 'design'],
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 3,
      title: 'Optimizing React Performance',
      excerpt: 'Practical techniques to improve the performance of your React applications and avoid common pitfalls.',
      date: 'March 10, 2023',
      author: 'Enver Yakut',
      categories: ['react', 'performance'],
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 4,
      title: 'Introduction to State Management with Redux',
      excerpt: 'Learn the fundamentals of Redux and how to implement it in your React applications for better state management.',
      date: 'February 18, 2023',
      author: 'Enver Yakut',
      categories: ['react', 'redux'],
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 5,
      title: 'Creating Custom React Hooks',
      excerpt: 'Explore how to build reusable custom hooks to share logic between different components in your React application.',
      date: 'January 5, 2023',
      author: 'Enver Yakut',
      categories: ['react', 'javascript'],
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 6,
      title: 'Web Accessibility Best Practices',
      excerpt: 'Essential guidelines and techniques to make your websites accessible to all users, including those with disabilities.',
      date: 'December 12, 2022',
      author: 'Enver Yakut',
      categories: ['accessibility', 'html'],
      image: 'https://via.placeholder.com/800x400',
    },
  ];

  const categories = [
    { name: 'all', label: 'All Categories' },
    { name: 'react', label: 'React' },
    { name: 'javascript', label: 'JavaScript' },
    { name: 'css', label: 'CSS' },
    { name: 'design', label: 'Design' },
    { name: 'accessibility', label: 'Accessibility' },
    { name: 'performance', label: 'Performance' },
    { name: 'redux', label: 'Redux' },
    { name: 'html', label: 'HTML' },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thoughts, ideas, and insights about web development, design, and technology.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-secondary mb-2">
                    <a href={`/blog/${post.id}`} className="hover:text-primary transition">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap text-sm text-gray-500 gap-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <FaTags className="text-gray-400 mt-1" />
                    {post.categories.map((category, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md cursor-pointer hover:bg-primary hover:text-white transition"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-secondary mb-2">No posts found</h2>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-16 bg-primary text-white p-8 rounded-lg shadow-md">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl font-bold mb-2">Subscribe to my newsletter</h2>
              <p className="text-blue-100">
                Get the latest articles and resources sent straight to your inbox.
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-secondary hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-r-md transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 