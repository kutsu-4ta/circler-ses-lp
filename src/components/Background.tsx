// Background.tsx
export default function Background() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6">なぜ今、人財育成なのか？</h2>
                <p className="text-gray-800 mb-4">
                    私たちの組織には、以下のような課題が存在しています：
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>プレイングマネージャーの業務過多による育成力の低下</li>
                    <li>中間層の空洞化と若手育成の機会不足</li>
                    <li>個人依存・属人化した現場対応</li>
                </ul>
                <p className="text-gray-800">
                    これらの課題に対し、「自発型人財」を育てることを軸に据えた戦略的な人財育成が、
                    組織の持続的成長と価値提供に不可欠であると私たちは考えています。
                </p>
            </div>
        </section>
    );
}
