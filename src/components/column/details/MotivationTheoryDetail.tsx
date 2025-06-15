import ColumnLayout from "../ColumnLayout";
export const motivationTheoryMeta = {
    id: "motivation-theory",
    title: "モチベーション理論と組織設計",
    author: "山下 将史",
    date: "2025年6月16日",
    category: "人事",
    tags: [
        "モチベーション",
        "自己決定理論",
        "ハーズバーグ",
        "エンゲージメント",
        "報酬設計",
    ],
};

const MotivationTheoryDetail: React.FC = () => (
    <ColumnLayout
        title={motivationTheoryMeta.title}
        author={motivationTheoryMeta.author}
        date={motivationTheoryMeta.date}
        category={motivationTheoryMeta.category}
        tags={motivationTheoryMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            自律性・有能感・関係性を重視する<b>自己決定理論（SDT）</b>、<br />
            衛生要因と動機付け要因に分ける<b>ハーズバーグの二要因論</b>。<br />
            これらの理論は、私たちが「人が仕事に何を求めているのか」を構造的に理解するうえで、非常に役立ちます。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            ハーズバーグの理論によれば、<b>報酬</b>は一枚岩ではなく、<b>満足を生むもの（動機づけ要因）</b>と、
            <b>不満を抑えるもの（衛生要因）</b>に分かれます。<br />
            給与や福利厚生などの“衛生要因”は整っていて当たり前であり、欠けると不満になりますが、整っていてもそれ自体がやりがいにはつながりません。<br />
            一方で、承認・達成感・成長実感などの“動機づけ要因”こそが、仕事の中での<b>満足感</b>や<b>やる気</b>につながります。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            また、SDTが示すように、私たちは<b>自分で選べているか（自律性）</b>、<b>役に立てているか（有能感）</b>、
            <b>仲間とのつながりを感じられるか（関係性）</b>といった内的な感覚に強く影響されます。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            つまり、「報酬」は<b>お金</b>や<b>制度</b>に限らず、その人の<b>価値観</b>や<b>ライフステージ</b>、
            さらには<b>会社に何を期待しているか</b>によって、大きく意味が変わってくるのです。<br />
            画一的な報酬設計ではなく、個々人にとって<b>適切な報酬</b>を設計することが、エンゲージメントを高める鍵となります。
        </p>

        <div className="flex justify-center my-8">
            <img
                src="/column/motivation-seory-vs-ses.png"
                alt="モチベーションと報酬"
                className="max-w-full h-auto rounded shadow-md"
            />
        </div>

        <p className="text-lg leading-relaxed mb-6">
            モチベーションを“感情”ではなく“構造”として捉えることで、<br />
            再現性ある組織設計と、社員にとって納得感のある働き方の両立が見えてきます。
        </p>
    </ColumnLayout>
);

export default MotivationTheoryDetail;
