import ColumnLayout from '../../../components/column/ColumnLayout';

export const valueDefinitionMeta = {
    id: "value-definition",
    title: "“単価＝価値”ではない、自社の“定義”がブランドをつくる",
    author: "山下 将史",
    date: "2025年6月17日",
    category: "マーケティング",
    tags: [
        "SESの価値定義",
        "価格戦略",
        "バリュープロポジション",
        "ブランディング",
        "人的資本経営"
    ],
    description:
        "価格ではなく“自社の定義”で価値を決める。人材育成・ブランディング・経営判断をつなぐ視点を紹介します。",
};

const ValueDefinitionDetail: React.FC = () => (
    <ColumnLayout
        title={valueDefinitionMeta.title}
        author={valueDefinitionMeta.author}
        date={valueDefinitionMeta.date}
        category={valueDefinitionMeta.category}
        tags={valueDefinitionMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            SESの現場では、「いくらで売れているか」がそのまま人材の価値と見なされがちです。<br />
            ですが、マーケティングの視点で見ると、それは<b>価格（Price）であって、価値（Value）ではありません</b>。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            価格は市場が決めるかもしれません。<br />
            しかし、価値は<b>企業が定義し、伝え、納得させるもの</b>です。<br />
            つまり、自社が価値を定義しない限り、それは“価格任せ”の経営になってしまいます。
        </p>

        <p className="text-base leading-relaxed mb-6">
            バリュープロポジションという言葉があります。<br />
            これは「自社が顧客に対してどんな価値を提供するのか」を言語化したものですが、<br />
            SESにおいてもこれは極めて重要です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            たとえば、「この人材は現場で評価されたから価値がある」という声は、<br />
            一見ポジティブに見えて、裏を返せば<b>“現場でしか価値を定義できない”</b>状態でもあります。
        </p>

        <p className="text-base leading-relaxed mb-6">
            自社での価値定義が曖昧だと、以下のような経営課題が浮上します：
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
            <li>育成の方針が個人任せになり、評価軸が不明確になる</li>
            <li>給与や報酬が価格依存になり、納得感や公平性を損なう</li>
            <li>組織的なポジショニングやブランディングが機能しなくなる</li>
        </ul>

        <p className="text-base leading-relaxed mb-6">
            ただし、誤解してはならないのは、<b>SESにおける“単価”という指標そのものを否定する必要はない</b>ということです。<br />
            むしろ単価という数字は、<b>成長や提供価値の外部的なフィードバックとして非常に有用</b>です。
        </p>

        <p className="text-base leading-relaxed mb-6">
            問題なのは、その数字が<b>意味づけされないまま一人歩きしていること</b>です。<br />
            本来ならば「この単価は、こういう強みや提供価値の結果である」という<b>物語やロジック</b>が必要です。
        </p>

        <p className="text-base leading-relaxed mb-6">
            このように単価という外部的な数値と、<b>自社の中で育てたい人材像やMVVとの接続</b>がなされてはじめて、<br />
            単価は“意味ある成長指標”として使えるものになります。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            価値定義を外部に委ねず、<b>自社の戦略や文化に基づいて再定義</b>すること。<br />
            それが、ブランディングの第一歩であり、<br />
            人的資本経営における最も根源的な問いかけなのです。
        </p>
    </ColumnLayout>
);

export default ValueDefinitionDetail;
