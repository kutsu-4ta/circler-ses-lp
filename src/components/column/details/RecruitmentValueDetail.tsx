import ColumnLayout from "../ColumnLayout";

export const recruitmentValueMeta = {
    id: "recruitment-value",
    title: "採用戦略に「意味」を持たせる",
    author: "山下 将史",
    date: "2025年6月16日",
    category: "マーケティング",
    tags: [
        "カルチャーフィット",
        "MVV",
        "ブランディング",
        "人事戦略",
        "採用効率",
    ],
};

const RecruitmentValueDetail: React.FC = () => (
    <ColumnLayout
        title={recruitmentValueMeta.title}
        author={recruitmentValueMeta.author}
        date={recruitmentValueMeta.date}
        category={recruitmentValueMeta.category}
        tags={recruitmentValueMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            採用は「人を増やす活動」ではなく、<br />
            「どんな物語に、誰を巻き込むか」を決める<b>経営行為</b>です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            確度の低い求職者との偶然的な出会いに依存し、<br />
            魅力的な人物との接点が“運任せ”になっている状態は、<b>決して普通ではありません</b>。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            エンジニアリングには<b>見積もり工数</b>がありますが、採用には存在しません。<br />
            つまり、採用につながらなかった活動の工数は、直接的な<b>損失</b>になります。<br />
            組織が利益を出すためには「収入を増やす」か「支出を減らす」か。<br />
            まず着手すべきは、<b>損失を生まない採用の質</b>を構築することです。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            そのためには、<b>カルチャーフィット採用</b>という観点が欠かせません。<br />
            自社の文化に合った人物像をあらかじめ抽出し、<b>戦略的に発信</b>することで、<br />
            採用の効率は高まり、求職者の質も“最初から”絞り込まれます。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            まずは自社の社員を分析し、<b>高評価な人物像</b>をモデル化することから始めます。<br />
            たとえば、「◯◯さんのような人をもっと採りたい」と思うなら、<br />
            社内に似たような人が何人いるか、<b>過去・現在・将来</b>をインタビューし、<br />
            共通点や意外な傾向を探ってみるのです。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            仮に、なぜか皆<b>犬が好き</b>だったとしたらどうでしょう？<br />
            採用広報のInstagramに、<b>犬カフェに行く社内イベント</b>の記事を定期的に発信し、<br />
            なぜそんなイベントがあるのかを、<b>MVV（ミッション・ビジョン・バリュー）</b>に結びつけて伝えるのです。<br />
        </p>

        <p className="text-lg leading-relaxed mb-6">
            例えば、その会社のMVVが次のようなものだった場合。<br />
            Mission（存在意義）である「多様な“好き”を尊重する組織をつくる」こと、<br />
            Vision（目指す未来）である「共感が伝播するカルチャーの発信」、<br />
            そしてValue（行動指針）としての「まず自分たちが楽しむこと」。<br />
            この3つがあるからこそ、<b>犬カフェに行くことに“意味”がある</b>のです。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            外から見れば一見ユルいイベントでも、そこには組織の<b>一貫した論理</b>と<b>採用への意図</b>が込められています。<br />
            そしてその“意味のある活動”は、きっと未来の仲間を引き寄せてくれるはずです。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            こうした「抽象→分析→発信」のループを組織内に組み込むことが、<br />
            採用の質を変え、組織のブランドを築いていく<b>“設計された共感”</b>につながります。<br />
            また、MVVはただの指針ではなく戦略の隠れ蓑として機能するという点も重要です。
        </p>
    </ColumnLayout>
);

export default RecruitmentValueDetail;
