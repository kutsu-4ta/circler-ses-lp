import React from 'react';
import DetailBox from './DetailBox';

const YourActionSection: React.FC = () => (
    <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                「で、自分はどうすればいいの？」
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                今回の取り組みは、「強制参加」ではありません。<br />
                でも、もし少しでも「自分を変えたい」「もっと活躍したい」と思っているなら…
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-200 text-left">
                <p className="text-lg font-semibold text-indigo-700 mb-2">☑ こんな人におすすめ</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>何となく将来が不安だけど、何をすればいいかわからない</li>
                    <li>今の現場で自分の強みを発揮できていない気がする</li>
                    <li>もっと自信を持って、営業に“自分”を売ってほしい</li>
                </ul>
            </div>

            <DetailBox title="もっと踏み込んでみるには？">
                <p className="text-gray-800">
                    参加を希望する人には、Slackにてご案内します。<br />
                    まずは「自分を知るところ」から、一歩を踏み出してみませんか？
                </p>
            </DetailBox>
        </div>
    </section>
);

export default YourActionSection;
