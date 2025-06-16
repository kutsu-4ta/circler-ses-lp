import ColumnLayout from "../../../components/column/ColumnLayout";

export const willCanMustMeta = {
    id: "will-can-must",
    title: "Will・Can・Mustを使った目標設計論",
    author: "山下 将史",
    date: "2025年6月16日",
    category: "組織開発・マネジメント",
    tags: [
        "Will・Can・Must",
        "キャリア支援",
        "育成",
        "マネジメント",
        "可視化ツール",
    ],
};

const WillCanMustDetail: React.FC = () => (
    <ColumnLayout
        title={willCanMustMeta.title}
        author={willCanMustMeta.author}
        date={willCanMustMeta.date}
        category={willCanMustMeta.category}
        tags={willCanMustMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            キャリア支援や育成方針を考えるうえで、<strong>Will（意志）・Can（能力）・Must（期待）</strong>のフレームは極めて有効です。<br />
            自己理解にもマネジメントにも使える、<b>汎用性の高い“思考の地図”</b>です。
        </p>

        <p className="text-base leading-relaxed mb-6">
            このフレームは、次のように2つの用途で活用できます：
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
            <li><b>マネージャーが部下を理解し、適切に支援・指導する</b>ための対話ツールとして</li>
            <li><b>個人が自己分析し、納得感あるキャリア目標を描く</b>ための内省フレームとして</li>
        </ul>

        <p className="text-base leading-relaxed mb-6">
            Will・Can・Mustの3要素を整理することで、以下のような<b>構造的な対話</b>が可能になります：
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
            <li><strong>Will（意志）</strong>：何を大切にして働きたいか／どんなことに興味があるか</li>
            <li><strong>Can（能力）</strong>：どんなスキルがあるか／過去の経験から得たことは何か</li>
            <li><strong>Must（期待）</strong>：今の役割や会社の中で求められていることは何か</li>
        </ul>

        <p className="text-base leading-relaxed mb-6">
            この3つが<b>バラバラなまま</b>では、努力は空回りしやすく、<br />
            逆に<b>重なり合う部分</b>を見つけられれば、<b>実行可能で意味のある目標</b>が立ち上がってきます。
        </p>

        <p className="text-base leading-relaxed mb-6">
            サーキュラーSESでは、この設計を支援するために、<strong>Will・Can・Mustアクションシート</strong>を開発しました。<br />
            特徴は、<b>「言語化を強制しない」</b>という点にあります。
        </p>

        <p className="text-base leading-relaxed mb-6">
            多くの自己分析ツールは、明確な言語化やスキルの棚卸しを求めがちです。<br />
            しかし実際には、<b>「うまく言えないけどなんとなく感じていること」</b>の中にこそ、<b>本質的なWill</b>が隠れています。
        </p>

        <p className="text-base leading-relaxed mb-6">
            そこで私たちは、「何がWillで、何がCanで、何がMustか」を<b>ぼんやりと俯瞰できる設計</b>を優先しました。<br />
            その結果、言語化できていなくても、<b>“重なりの感覚”</b>を視覚的に捉えられるようになっています。
        </p>

        <p className="text-base leading-relaxed mb-6">
            「自分のキャリアをどうするか」は、明確な答えが出ることよりも、<br />
            <b>納得して踏み出せること</b>が大切です。<br />
            Will・Can・Mustは、その“納得”を育てるフレームであり、対話の土台でもあります。
        </p>
    </ColumnLayout>
);

export default WillCanMustDetail;
