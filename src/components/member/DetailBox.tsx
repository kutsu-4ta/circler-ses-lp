import { useState } from 'react';

interface DetailBoxProps {
    title: string;
    children: React.ReactNode;
}

const DetailBox: React.FC<DetailBoxProps> = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="text-center mt-12">
            <button
                onClick={() => setOpen(!open)}
                className="py-3 px-8 bg-indigo-600 text-white font-bold rounded-full shadow-md hover:bg-indigo-700 transition transform hover:scale-105 text-lg"
            >
                {open ? '詳細を隠す' : title}
            </button>
            {open && (
                <div className="mt-8 p-6 bg-white rounded-xl shadow-xl border border-indigo-200 text-left max-w-4xl mx-auto">
                    {children}
                </div>
            )}
        </div>
    );
};

export default DetailBox;
