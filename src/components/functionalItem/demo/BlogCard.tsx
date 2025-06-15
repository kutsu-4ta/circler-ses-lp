// components/BlogCard.tsx

import React from 'react';

type BlogCardProps = {
    title: string;
    excerpt: string;
    author: string;
    role: string;
    tags: string[];
};

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, author, role, tags }) => {
    return (
        <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition">
            <div className="mb-2 text-sm text-gray-500">{tags.join(' / ')}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-3">{excerpt}</p>
            <div className="text-xs text-gray-400">
                {author}（{role}）
            </div>
        </div>
    );
};

export default BlogCard;
