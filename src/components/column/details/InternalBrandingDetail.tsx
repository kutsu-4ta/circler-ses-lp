import ColumnLayout from '../../../components/column/ColumnLayout';

export const internalBrandingMeta = {
    id: "internal-branding",
    title: "社内ブランディングは“文化資本”から始まる",
    author: "山下 将史",
    date: "2025年6月16日",
    category: "マーケティング",
    tags: [
        "社内ブランディング",
        "文化資本",
        "MVV",
        "内発的動機",
        "経営課題",
    ],
};

const InternalBrandingDetail: React.FC = () => (
    <ColumnLayout
        title={internalBrandingMeta.title}
        author={internalBrandingMeta.author}
        date={internalBrandingMeta.date}
        category={internalBrandingMeta.category}
        tags={internalBrandingMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            社内ブランディングとは、社員一人ひとりが「この会社の良さ」を<b>内発的に感じられる状態</b>を指します。<br />
            それは制度やスローガンではなく、<b>“文化”として根付くもの</b>です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            この文脈で大切になるのが、<b>文化資本</b>という考え方です。<br/>
            文化資本とは、<b>お金や財産といった経済資本ではなく</b>、<br />
            知識・教養・スキル・経験・文化的嗜好・学歴・資格など、<b>社会的価値を形づくる無形の資産</b>を指します。
        </p>

        <p className="text-base leading-relaxed mb-6">
            つまり、社員一人ひとりが持つこの文化資本を、組織として<b>どう受け取り、どう翻訳するか</b>がブランディングの本質です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            そこで重要なのが<b>MVV（Mission・Vision・Value）</b>です。<br />
            MVVがなぜ大事なのか？<br />
            それは、<b>社員の文化資本を“どこに接続すればよいか”を示す最もわかりやすい“着地点”だから</b>です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            社員がMVVと接続できていない状態は、「共通の価値観が定まっていない」だけでなく、<br />
            実は<b>文化資本が社内でうまく受け止められていない</b>ことの表れでもあります。
        </p>

        <p className="text-base leading-relaxed mb-6">
            だからこそ、社員がMVVに接続しにくい理由を掘り下げていくと、<br />
            組織の<b>構造的な経営課題や、コミュニケーションの断絶</b>が浮かび上がってきます。
        </p>

        <p className="text-base leading-relaxed mb-6">
            この文化資本を活かすために、私たちは次のような取り組みを行っています：
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
            <li>MVVを可視化し、社内対話を通じて“自分ごと”化する</li>
            <li>社内ブログやナレッジ共有で「語れる文化」をつくる</li>
            <li>1on1やチーム内の会話で、非言語的価値観も含めて共有する</li>
        </ul>

        <p className="text-base leading-relaxed mb-6">
            社内ブランディングは一朝一夕でできるものではありませんが、待っていて完成するものでもありません。<br/>
            <b>会社からの発信</b>と現場での<b>行動の解釈</b>と、組織としての<b>言語の意味付け</b>が一致したとき、<br/>
            文化資本は<b>組織の強み</b>へと転化されていきます。
        </p>
    </ColumnLayout>
);

export default InternalBrandingDetail;
