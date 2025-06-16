import ColumnLayout from '../../../components/column/ColumnLayout';

export const proposalStructureDetailMeta = {
    id: "self-mutual-public-aid",
    title: "“経験則だけ”の営業が限界を迎えるとき",
    author: "山下 将史",
    date: "2025年6月17日",
    category: "営業戦略",
    tags: [
        "営業の属人化",
        "育成戦略",
        "顧客満足",
        "人的資本経営",
        "SES営業"
    ],
};

const ProposalStructureDetail: React.FC = () => (
    <ColumnLayout
        title={proposalStructureDetailMeta.title}
        author={proposalStructureDetailMeta.author}
        date={proposalStructureDetailMeta.date}
        category={proposalStructureDetailMeta.category}
        tags={proposalStructureDetailMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            「あのエンジニアにはこの提案が刺さると思った」<br />
            そんな営業の肌感覚は、ときに驚くほど的確で、誰よりも現場に寄り添っているように見えるかもしれません。<br />
            しかし、その感覚が<b>営業の時間や余裕を前提とした“属人的な才能”に依存しているとしたら</b>、組織としての限界はすぐそこです。
        </p>

        <p className="text-base leading-relaxed mb-6">
            特に深刻なのは、<b>営業リソースの逼迫</b>です。<br />
            案件数が増え、人材も多様化する中で、<b>すべてのSEに対して丁寧な対応を続けることは現実的ではなく</b>なってきています。<br />
            結果として、経験豊富な営業に負担が集中し、ナレッジは属人化し、機会損失やミスマッチが発生するリスクが高まります。
        </p>

        <p className="text-base leading-relaxed mb-6">
            全て感覚に依存してSEに丁寧に寄り添っているのは素晴らしいことです。<br />
            ですが、<b>ビジネスにおいて構造化できる部分と、そうでない部分を明確にすることは基本</b>です。<br />
            その区別こそが、限られたリソースを本当に意味のある行動に集中させる鍵になります。
        </p>

        <p className="text-base leading-relaxed mb-6">
            本戦略では、<b>SE個人の帰属意識やWill・Can・Mustを具に収集</b>し、<b>個々の成長シナリオを描く</b>ことで、<br />
            営業提案における“個別最適なマッチング”を構造的に再現可能にしています。<br />
            また、SEの強みを一番近くで見ているのは、<b>同じ技術者である主任</b>です。<br />
            主任が1on1などを通じて見出したSEの価値を、営業が<b>顧客ニーズとつなげる文脈を構築し、交渉する</b>。<br />
            この連携により、属人化を解消しながらも、個別対応の質を落とさない仕組みが実現できます。
        </p>

        <p className="text-base leading-relaxed mb-6">
            このように、<b>マーケティング戦略と人材育成戦略が相乗効果をなす仕組み</b>とすることで、<br />
            営業リソースを最適化し、<b>人がやるべきこと</b>に時間を割ける状態をつくることができます。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            本戦略は、SE個人の価値理解と構造的な再現性の両立を目指し、<br />
            <b>営業コストの削減・SE満足度の向上・顧客満足度の向上</b>という、まさに<b>三方良しの構造</b>を築いています。
        </p>
    </ColumnLayout>
);

export default ProposalStructureDetail;
