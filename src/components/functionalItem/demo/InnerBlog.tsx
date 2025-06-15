import BlogCardList from "./BlogCardList";

export default function InnerBlog() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">📚 社内ブログ</h2>
            <BlogCardList />
        </div>
    );
}
