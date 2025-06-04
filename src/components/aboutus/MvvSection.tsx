/**
 * 目的：自社のMVVとの接続を明確にする
 * 表示内容：
 * ミッション：この会社に文化を作る
 * ビジョン：表情が文化になる会社
 * バリュー：5項目＋その具体例（資料にある言語化）
 */

const MvvSection: React.FC = () => (
    <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-gray-800">
            <h2 className="text-3xl font-bold mb-10 text-indigo-800">私たちのMVV</h2>

            {/* Mission */}
            <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2"> ミッション</h3>
                <p>社員と会社が一緒に成長する文化の醸成</p>
            </div>

            {/* Vision */}
            <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2"> ビジョン</h3>
                <p>表情が文化になる組織<br/>表情を生むのは楽しく働くという“選択”。</p>
            </div>

            {/* Value */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2"> バリュー</h3>
                <p className="mb-2">緩む強さ、締める誠実さ。</p>
                <p className="mb-2">肩の力を抜くことで、仲間との信頼が深まる。</p>
                <p className="mb-2">芯を持って締めることで、顧客からの期待にも応えられる。</p>
                <p>笑いながら本気で仕事に取り組む。<br/>このバランスが、最高のチームワークと成果を生む。</p>
            </div>

            {/* Action Guidelines */}
            <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">🛠 行動指針</h3>
                <p className="mb-6 text-lg font-medium">我々の価値観は自社のバリューへ寄与します</p>

                <ul className="space-y-6 text-base">
                    <li>
                        <strong>04. 固定観念にとらわれず、新しい価値観を受け入れる。</strong><br/>
                        私たちは、「前と違う」「他と違う」を否定ではなく可能性として見つめます。
                        小さな違和感も、変化のきっかけになると信じて対話し、学び合うことを大切にしています。
                    </li>
                    <li>
                        <strong>01. 自身の価値を高める行動を意識する。</strong><br/>
                        私たちは、社内での「自己価値の発信」を通じて、自らの経験や知見を資産として還元し、
                        結果的に市場価値と自信を高めていくことを目指します。
                    </li>
                    <li>
                        <strong>02. チームを意識しながら個々の力を発揮する。</strong><br/>
                        私たちは、一人ひとりの工夫や挑戦が他の誰かの力になると信じています。
                        自分だけでは見えない成果がチームの中で広がっていく喜びを共有します。
                    </li>
                    <li>
                        <strong>05. 意義のある仕事と、価値のあるプライベートの両立を目指す。</strong><br/>
                        私たちは、社員一人ひとりが幸せであることが誠実なサービスと信頼につながると信じています。
                        仕事を通じて誰かの役に立つ喜びと、暮らしの中での自分らしさを大切にしています。
                    </li>
                    <li>
                        <strong>03. 自由な発想で新しい価値を創出する。</strong><br/>
                        私たちは、「こうしてみたい」という発想が会社や仲間に届いてカタチになる瞬間を大切にしています。
                        アイデアは思いつくだけでなく、伝えてこそ力を持ちます。
                    </li>
                </ul>
            </div>
        </div>
    </section>
);

export default MvvSection;
