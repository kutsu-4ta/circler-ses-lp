export default function Footer() {
    const email = "yama4ta.antapp@gmail.com";
    const leaderName = "山下 将史（TUNE代表）";
    const organizeName = "TUNE team";

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">

                {/* ロゴ・理念 */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">{organizeName}</h3>
                    <p className="text-sm leading-relaxed">
                        私たちは「人がよりよく幸せを目指せる社会」を<br />
                        MVVに基づいた人材育成戦略で支援しています。
                    </p>
                </div>

                {/* サイトナビゲーション */}
                <div>
                    <h4 className="text-md font-semibold text-white mb-3">サイトマップ</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/leaders" className="hover:text-white">経営層向け</a></li>
                        {/*<li><a href="/members" className="hover:text-white">社員向け</a></li>*/}
                        <li><a href="/services" className="hover:text-white">サービス概要</a></li>
                        <li><a href="/functions" className="hover:text-white">活用ツール</a></li>
                        <li><a href="/column" className="hover:text-white">コラム</a></li>
                        <li><a href="/aboutUs" className="hover:text-white">私たちについて</a></li>
                    </ul>
                </div>

                {/* お問い合わせ */}
                <div>
                    <h4 className="text-md font-semibold text-white mb-3">お問い合わせ</h4>
                    <p className="text-sm leading-relaxed">
                        資料や導入についてのご相談は<br />
                        担当：{leaderName}まで
                    </p>
                    <p className="mt-2 text-sm text-gray-400">{email}</p>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} {organizeName} All rights reserved.
            </div>
        </footer>
    );
}
