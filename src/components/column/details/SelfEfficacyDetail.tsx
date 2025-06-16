import ColumnLayout from "../../../components/column/ColumnLayout";

export const selfEfficacyMeta = {
    id: "self-efficacy",
    title: "自己効力感が人を育てる組織のエンジン",
    author: "山下 将史",
    date: "2025年6月16日",
    category: "組織開発",
    tags: [
        "自己効力感",
        "組織効力感",
        "ナレッジ共有",
        "心理的資本",
        "ロールモデル",
    ],
};

const SelfEfficacyDetail: React.FC = () => (
    <ColumnLayout
        title={selfEfficacyMeta.title}
        author={selfEfficacyMeta.author}
        date={selfEfficacyMeta.date}
        category={selfEfficacyMeta.category}
        tags={selfEfficacyMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            優秀な人や尊敬する先輩を見て、「自分にはできない」と感じたことはありませんか？<br />
            でも、その人がかつて<b>同じことで悩み、詰まっていた</b>と知った瞬間、少しだけ<b>自分にもできるかも</b>という気持ちが芽生えます。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            この「これなら自分でもできそう」という感覚が、<b>自己効力感</b>です。<br />
            自己効力感は人の行動を促し、成長意欲の“着火点”になります。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            たとえば、新人の頃に誰もがぶつかるエラーや設計の壁に対して、<br />
            「先輩もここで詰まっていたが、こうやって突破していた」<br />
            という<b>成長ログ</b>が残っていれば、それは次の世代の<b>心理的資産</b>になります。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            成長ログの中には、意外にも<b>簡単な工夫</b>や<b>ちょっとした視点の転換</b>が含まれていることが多く、<br />
            それを知った後輩は、「その程度でいいのか！」と肩の力が抜けることもあります。
        </p>

        <div className="flex justify-center my-8">
            <img
                src="/column/self-efficacy.png"
                alt="自己効力感"
                className="max-w-full h-auto rounded "
            />
        </div>

        <p className="text-lg leading-relaxed mb-6">
            こうして育まれた自己効力感は、やがて<b>組織効力感</b>へとつながります。<br />
            「自分一人では難しいけれど、このチームならできそう」という感覚。<br />
            これは個人の能力よりも<b>つながり</b>や<b>信頼</b>によって生まれます。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            たとえば、プログラミングしかできない人と、デザインしかできない人がペアになるだけで、<br />
            二人ではできることが一気に広がります。これは<b>能力の和</b>ではなく、<b>関係の可視化</b>の結果です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            知識や経験を言語化し、共有する文化。<br />
            成功や失敗をログとして残す仕組み。<br />
            そうした取り組みが、<b>自己効力感の連鎖</b>を生み、組織全体の<b>心理的な底力</b>を育てていきます。
        </p>
    </ColumnLayout>
);

export default SelfEfficacyDetail;
