const IntroSection: React.FC = () => (
    <section className="pt-24 pb-16 px-4 text-center bg-white shadow-inner">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-indigo-800">
                経営戦略と“人”の接続点を、<br/>もう一度見直す。
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                現場の声、組織のひずみ、事業の未来──<br />
                すべての起点は「人」から始まる。<br />
                この取り組みは、人の強みを翻訳し、経営戦略に接続する一歩です。
            </p>
            <p className="mt-8">
                <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                    取り組みの背景を詳しく見る
                </button>
            </p>

        </div>
    </section>
);

export default IntroSection;
