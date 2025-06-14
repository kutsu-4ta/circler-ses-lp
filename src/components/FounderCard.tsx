const FounderCard: React.FC = () => {
    const leaderName = "山下 将史";
    const organizeName = "TUNE";
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-16 max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start">
            {/* 画像エリア（仮写真） */}
            <div className="w-32 h-32 rounded-full overflow-hidden bg-indigo-100 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                {/* 写真を入れたい場合： <img src="/path/to/profile.jpg" alt="代表写真" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex items-center justify-center text-indigo-500 text-4xl font-bold">
                    YM
                </div>
            </div>

            {/* テキスト情報 */}
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-indigo-800 mb-1">{leaderName}</h3>
                <p className="text-sm text-gray-500 mb-4">{organizeName}代表 / 構造思考・組織戦略デザイナー</p>

                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>年齢：28歳</li>
                    <li>Web（フルスタック） / スマホアプリ / UI・UX デザイン</li>
                    <li>戦略・組織論の独学歴：9年</li>
                    <li>志向：MVV設計・ナラティブ・人的資本戦略</li>
                </ul>

                {/* SNSリンク */}
                <div className="flex justify-center md:justify-start space-x-4">
                    <a
                        href="https://twitter.com/your_username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 transition"
                    >
                        {/*<FaTwitter size={20} />*/}
                    </a>
                    <a
                        href="https://linkedin.com/in/your_profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 transition"
                    >
                        {/*<FaLinkedin size={20} />*/}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FounderCard;
