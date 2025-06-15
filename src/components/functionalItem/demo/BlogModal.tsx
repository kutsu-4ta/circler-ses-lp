import React from 'react';

type Blog = {
    title: string;
    excerpt: string;
    author: string;
    role: string;
    tags: string[];
    date: string;
    likes: number;
};

interface BlogModalProps {
    blog: Blog;
    onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose }) => {
    const initials = blog.author
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white max-w-2xl w-full p-6 rounded shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
                >
                    ×
                </button>

                {/* タイトル */}
                <h2 className="text-2xl font-bold text-indigo-700 mb-3">{blog.title}</h2>

                {/* ユーザー情報 */}
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                        {initials}
                    </div>
                    <div>
                        <div className="font-medium">{blog.author}</div>
                        <div className="text-xs text-gray-500">{blog.role}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <span>{blog.date}</span>
                        <span>・</span>
                        <span>❤️いいね {blog.likes}</span>
                    </div>
                </div>

                {/* AI要約ラベル */}
                <div className="mb-2 text-xs text-gray-500 flex items-center gap-1">
                    <span className="text-indigo-600">🤖</span>
                    <span>AIによる記事の要約</span>
                </div>

                {/* 要約コンテンツ */}
                <div className="bg-indigo-50 p-4 rounded text-sm text-gray-800 mb-4 leading-relaxed">
                    <p><strong>🔍 こんな人におすすめ：</strong> {blog.title}に関心がある方、現場の工夫に学びたい方。</p>
                    <p><strong>📌 わかること：</strong> {blog.excerpt}</p>
                </div>

                {/* タグ表示 */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded-full"
                        >
              #{tag}
            </span>
                    ))}
                </div>

                {/* 本文リンク（デモ用・遷移しません） */}
                <button
                    disabled
                    className="w-full mt-2 py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm"
                    title="これはデモ用のボタンです。実際には遷移しません。"
                >
                    📖 本文を読む
                </button>
                <p className="text-xs text-center text-gray-500 mt-1">※ デモのため遷移は行われません</p>

            </div>
        </div>
    );
};

export default BlogModal;
