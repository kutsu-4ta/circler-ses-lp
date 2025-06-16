import ColumnLayout from "../ColumnLayout";

export const collectiveEfficacyMeta = {
    id: "collective-efficacy",
    title: "組織効力感という“空気”を育てるには",
    author: "山下 将史",
    date: "2025年6月16日",
    category: "組織開発",
    tags: [
        "帰属意識",
        "自己効力感",
        "マネジメント設計",
        "キャリア安全性",
    ],
};

const CollectiveEfficacyDetail: React.FC = () => (
    <ColumnLayout
        title={collectiveEfficacyMeta.title}
        author={collectiveEfficacyMeta.author}
        date={collectiveEfficacyMeta.date}
        category={collectiveEfficacyMeta.category}
        tags={collectiveEfficacyMeta.tags}
    >
        <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
                組織効力感とは、「このチームならできるかもしれない」という集団的な信念。<br />
                個人のやる気ではなく、チームの“空気”として醸成される感覚です。
            </p>
            <p className="text-base leading-relaxed mb-6">
                これがある組織では、挑戦や協働が自然と起こり、成果も持続的に生まれます。<br />
                以下の要素が、組織効力感の醸成に寄与します：
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
                <li>共通言語（MVVなど）がチームに浸透している</li>
                <li>定例会や対話で“未来志向”の話題が共有されている</li>
                <li>メンバー同士の称賛やフィードバックが機能している</li>
                <li>チームとしての小さな成功体験を積み重ねている</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
                「空気は設計できる」。<br />
                この視点に立った時、マネジメントや制度設計においても、
                エンゲージメントは感情論ではなく、戦略として扱うことが可能になります。
            </p>
        </div>
    </ColumnLayout>
);

export default CollectiveEfficacyDetail;
