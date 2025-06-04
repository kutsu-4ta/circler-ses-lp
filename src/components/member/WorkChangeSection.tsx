import React from 'react';
import DetailBox from './DetailBox';

const WorkChangeSection: React.FC = () => (
    <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                この取り組みで、働き方はこう変わる。
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                あなたの“強み”を会社全体に共有することで、<br />
                配属やキャリアの選択肢が「なんとなく」ではなく「意味あるもの」に変わっていきます。
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8 text-left">
                <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">📌 自分の強みが言語化される</h3>
                    <p className="text-gray-700">
                        自分では当たり前すぎて気づけなかった強みが、1on1やワークを通して「言葉」になります。
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">📌 適材適所の配属が進む</h3>
                    <p className="text-gray-700">
                        プロジェクトやチーム選びの時、「あの人はこういう価値観で働きたい人」という理解が共有されます。
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">📌 営業提案の質が上がる</h3>
                    <p className="text-gray-700">
                        単価やマッチ度を上げるには、“人”の魅力を伝える提案が必要です。強みの言語化がそれを後押しします。
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-2">📌 活動の目的が明確になる</h3>
                    <p className="text-gray-700">
                        ワークやSlackの投稿が「やらされ感」ではなく、自分のキャリアと繋がる行動として意味を持ちます。
                    </p>
                </div>
            </div>

            <DetailBox title="どんな流れで進むの？">
                <p className="text-gray-800 mb-4">
                    ワークはSlack上で進行し、1ヶ月〜2ヶ月の短期集中型です。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Step1: あなたの“強みの原体験”を深堀りします</li>
                    <li>Step2: 他の人の視点から、強みの輪郭を補強します</li>
                    <li>Step3: 上長や営業と一緒に、強みの活かし方を整理します</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                    ※Slackの投稿テンプレートや、対話フォーマットも用意されています。
                </p>
            </DetailBox>
        </div>
    </section>
);

export default WorkChangeSection;
