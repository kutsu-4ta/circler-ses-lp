import BackToColumnButton from '../../../components/column/BackToColumnButton';

const InternalBrandingDetail: React.FC = () => (
    <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-800 mb-6">社内ブランディングは“文化資本”から始まる</h1>
            <p className="text-lg leading-relaxed mb-6">
                社内ブランディングとは、社員一人ひとりが「この会社にいる意味」を実感できる状態を指します。<br />
                それは制度ではなく、“文化”として根付くものです。
            </p>
            <p className="text-base leading-relaxed mb-6">
                この文化資本を育てるためには、以下のような取り組みが重要です：
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
                <li>MVVを可視化し、社内対話で“自分ごと”化する</li>
                <li>社内ブログやナレッジ共有で「語れる文化」をつくる</li>
                <li>1on1などで非言語の価値観も含めた価値観の共有を重ねる</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
                ブランディングは、マーケティング部門だけのものではありません。<br />
                現場の行動と共通言語が揃った時、文化資本は「組織の強み」へと昇華されます。
            </p>
            <BackToColumnButton />
        </div>
    </section>
);

export default InternalBrandingDetail;
