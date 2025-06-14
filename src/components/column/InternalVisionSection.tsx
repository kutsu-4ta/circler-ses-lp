import React from 'react';
import BackToColumnButton from "./BackToColumnButton";

const InternalVisionSection: React.FC = () => (
    <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-6">
                「人を育てること」が、<br className="hidden sm:inline" />
                そのまま企業のブランドになる時代へ。
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                人月ビジネスのままでは、採用力も定着率も、そして信頼も頭打ちになります。<br />
                <br />
                私たちは“提案できるSE”という人財像を軸に、<br />
                育成・発信・翻訳・配置・評価・採用を一気通貫で設計することで、<br />
                SESという環境そのものを「人が育つ場」に変革していきます。<br />
                <br />
                その結果として、外部への信頼と内部の自信が循環し、<br />
                自社のブランディングが自然と進んでいくのです。
            </p>
        </div>
    </section>
);

export default InternalVisionSection;
