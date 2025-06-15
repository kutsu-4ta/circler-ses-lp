import BackToColumnButton from "./BackToColumnButton";

interface ColumnPostProps {
    title: string;
    author: string;
    date: string;
    category: string;
    tags?: string[];
    children: React.ReactNode;
}

const ColumnLayout: React.FC<ColumnPostProps> = ({
                                                     title,
                                                     author,
                                                     date,
                                                     category,
                                                     tags = [],
                                                     children,
                                                 }) => (
    <section className="py-20 px-6 max-w-4xl mx-auto text-gray-800">
        {/* ヘッダー情報 */}
        <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                {category}
            </div>
            <div className="font-medium">{author}</div>
            <div className="text-xs text-gray-500">{date}</div>
        </div>

        {/* タグ */}
        {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded-full"
                    >
            #{tag}
          </span>
                ))}
            </div>
        )}

        {/* タイトル */}
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
            {title}
        </h1>

        {/* 本文 */}
        {children}

        {/* 戻る */}
        <BackToColumnButton />
    </section>
);

export default ColumnLayout;
