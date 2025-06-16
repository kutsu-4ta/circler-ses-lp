import ColumnLayout from '../../../components/column/ColumnLayout';

export const belongingAndGrowthMeta = {
    id: "belonging-and-growth",
    title: "あの先輩が、自社の人だったらよかったのに",
    author: "山下 将史",
    date: "2025年6月17日",
    category: "組織開発・マネジメント",
    tags: [
        "帰属意識",
        "キャリア安全性",
        "リスキリング",
        "人的資本経営",
        "SESの構造課題"
    ],
};

const BelongingAndGrowthDetail: React.FC = () => (
    <ColumnLayout
        title={belongingAndGrowthMeta.title}
        author={belongingAndGrowthMeta.author}
        date={belongingAndGrowthMeta.date}
        category={belongingAndGrowthMeta.category}
        tags={belongingAndGrowthMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            SESという働き方において、最も多くのエンジニアが抱える感情の一つ。<br/>
            それが、<b>「この人が自社の先輩だったらよかったのに」</b>という、素朴で切実な願いです。
        </p>

        <p className="text-base leading-relaxed mb-6">
            現場では頼りになる上司や先輩がいて、毎日たくさんのことを学んでいる。<br/>
            けれど、その人は自社の人間ではない。<br/>
            自社に戻ったとき、ふと「自分には“自社のロールモデル”がいない」と気づいてしまう。<br/>
            プロジェクトが一区切りついて、お客様のチームで喜びを分かち合っても、<b>そこに“自社の仲間”はいない</b>。<br />
            この構造は、想像以上に静かに、しかし確実に心を蝕んでいきます。
        </p>

        <p className="text-base leading-relaxed mb-6">
            現代は、動画教材やオンラインスクール、生成AIなどを活用することで、<b>個人での学習やリスキリングが可能な時代</b>です。<br/>
            また、キャリアの選択肢もかつてないほど自由になり、<b>組織に所属しなくても成長できる環境</b>が整いつつあります。<br/>
            こうした背景の中で、「なぜ会社に所属するのか？」という問いは、ますます鋭くなっています。
        </p>

        <p className="text-base leading-relaxed mb-6">
            会社に所属する意味。それは教材や講座があるからではありません。<br/>
            <b>同じ目標を目指し、苦楽を共にできる仲間や先輩がいるから</b>です。<br/>
            技術だけではなく、価値観や目指す未来を共有できる人が近くにいることで、人は組織に“意味”を感じられるのです。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            成長したいと願うエンジニアにとって、目標になる存在が「顧客の上司」であることは、<br/>
            自社のキャリアにリアリティが持てないということ。<br/>
            そのまま現場に愛着をもち、自社とのつながりが薄れていくのは、<b>とても自然な流れ</b>です。
        </p>

        <p className="text-base leading-relaxed mb-6">
            本戦略では、<b>現場で学んだことを社内に対して放出することで自身の利益になるという“仕組み”を作る</b>ことで、<br />
            この切実な思いに対しての希望を作るモデルでもあるのです。
        </p>

        <p className="text-base leading-relaxed mb-6">
            帰属と成長。この2つをつなぐものは、「人」そのものです。<br />
            それはスローガンでも施策でもなく、<b>語り、動き、影響しあえるリアルな存在</b>です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            一緒に目指す目標があり、それを語れる先輩が自社にいる。<br/>
            成果をともに喜び合える仲間が、自社にいる。<br/>
            それこそが、エンジニアにとって<b>最強の帰属価値</b>であり、<br />
            組織にとって<b>最も持続可能な成長戦略</b>なのです。
        </p>
    </ColumnLayout>
);

export default BelongingAndGrowthDetail;
