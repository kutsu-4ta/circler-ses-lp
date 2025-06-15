import ColumnLayout from "../ColumnLayout";

export const belongingTheoryMeta = {
    id: "belonging-theory",
    title: "帰属意識と納得感の構造",
    author: "山下 将史",
    date: "2025年6月16日",
    category: "人事",
    tags: [
        "帰属意識",
        "納得感",
        "マネジメント設計",
        "MVV",
        "キャリア安全性",
        "心理的安全性",
    ],
};

const BelongingTheoryDetail: React.FC = () => (
    <ColumnLayout
        title={belongingTheoryMeta.title}
        author={belongingTheoryMeta.author}
        date={belongingTheoryMeta.date}
        category={belongingTheoryMeta.category}
        tags={belongingTheoryMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            「帰属意識」とは、<b>“自分がこの場所にいる意味”を実感できているか</b>という感覚です。
            <br />
            つまり、誰かに与えられるものではなく、<b>個人の内面に根ざした感情</b>です。
            <br />
            そのため「人それぞれ」で済ませるのではなく、<b>企業として丁寧に向き合う姿勢</b>が求められます。
        </p>

        <div className="flex justify-center my-8">
            <img
                src="/column/belonging-theory.png"
                alt="帰属意識の4因子"
                className="max-w-full h-auto rounded shadow-md"
            />
        </div>

        <p className="text-lg leading-relaxed mb-6">
            ただし、その向き合い方を間違えると、
            <br />
            押しつけや空回りの“文化の押し売り”になってしまいます。
            <br />
            帰属意識とはあくまで<b>社員が自発的に感じるもの</b>であり、<b>納得と共感の積み重ね</b>が必要なのです。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            組織において「居場所」や「信頼」を感じられるかどうかは、
            <br />
            <b>パフォーマンス・定着率・創造性</b>に大きな影響を与えます。
            <br />
            これは単なるメンタルケアではなく、<b>戦略レベルの設計論</b>です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            特に近年は、「心理的安全性」に加えて、
            <b>キャリアの安全性（キャリア・セーフティ）</b>という観点も注目されています。
            <br />
            社員が「この会社にいても将来が描ける」「自分の価値が高まる」と思える環境。
            <br />
            この<b>キャリア安全性</b>もまた、帰属意識を強める要素となります。
        </p>

        <div className="flex justify-center my-8">
            <img
                src="/column/career-safety.png"
                alt="キャリア安全性"
                className="max-w-full h-auto rounded shadow-md"
            />
        </div>

        <p className="text-lg leading-relaxed mb-6">
            では、どのように納得と共感を生み出すのか？鍵になるのは、次のような構造です：
        </p>

        <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
            <li>MVV（Mission・Vision・Value）との接続性</li>
            <li>1on1の設計と頻度・内容の質</li>
            <li>評価と報酬の透明性</li>
            <li>社内での言語化と発信文化</li>
            <li>心理的・キャリア的安全性を支える仕組み</li>
        </ul>

        <p className="text-lg leading-relaxed mb-6">
            これらが単なる制度やスローガンに終わるのではなく、
            <br />
            <b>物語（自分に当てはまるシナリオ）として社内に浸透しているか</b>が本質です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            <b>帰属意識は、「納得できる構造」と「共感できる物語」によって育まれる</b>もの。
            <br />
            この2軸を丁寧に設計することが、マネジメントに求められる役割です。
        </p>

        <div className="flex justify-center my-8">
            <img
                src="/column/career-safety2.png"
                alt="キャリア安全性2"
                className="max-w-full h-auto rounded shadow-md"
            />
        </div>

        <p className="text-lg leading-relaxed mb-6">
            帰属意識とは、“属させる”ことではなく、
            <br />
            <b>「自ら属したい」と思わせる関係性</b>を築くこと。
            <br />
            これこそが、VUCA時代における新しいマネジメントの本質ではないでしょうか。
        </p>
    </ColumnLayout>
);

export default BelongingTheoryDetail;
