import ColumnLayout from "../ColumnLayout";

export const internalVisionMeta = {
    id: "internal-vision",
    title: "ビジョンは“組織の意思”である",
    author: "山下 将史",
    date: "2025年6月16日",
    category: "経営戦略",
    tags: ["MVV", "ビジョン", "設計論", "ブランディング", "抽象思考"],
};

const InternalVisionDetail: React.FC = () => (
    <ColumnLayout
        title={internalVisionMeta.title}
        author={internalVisionMeta.author}
        date={internalVisionMeta.date}
        category={internalVisionMeta.category}
        tags={internalVisionMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            自社のビジョンやMVVを<b>「飾り」</b>として掲げるのか、<b>「設計の起点」</b>として扱うのか。<br />
            この違いは、組織の意思決定から日常のふるまいに至るまで、すべての文脈を変えてしまいます。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            ビジョンがなければ、どれほど優れた抽象化思考も<b>宙に浮いた設計</b>になってしまいます。<br />
            たとえ設計手法やフレームワークが整っていても、そこに<b>「どこを目指すのか」という中間指標</b>がなければ、組織は自走しません。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            ブランディングの世界では、<b>第一想起</b>を獲得するために「概念」を設計します。<br />
            「スターバックスといえば◯◯」「無印といえば◯◯」といった<b>言語にならない共通認識</b>を育てること。<br />
            それはコップや車のような目に見える道具を作るよりも、<b>はるかに高度な“抽象的なものづくり”</b>です。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            この<b>概念づくり</b>のタネとなるのが、<b>Mission・Vision・Value（MVV）</b>です。<br />
            特にビジョンは、<b>ミッションが「抽象」</b>、<b>現場の行動が「具体」</b>だとすれば、<br />
            その<b>ちょうど中間にある“翻訳装置”</b>として機能します。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            社員一人ひとりが、ビジョンの延長線上に<b>自分のキャリア</b>を描けるようになったとき、<br />
            ビジョンは“他人の言葉”ではなく、“自分の未来”になります。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            経営から現場まで、内発的に<b>つながるビジョン設計</b>こそが、<br />
            持続可能な<b>サーキュラーな組織</b>の骨格になるのです。
        </p>
    </ColumnLayout>
);

export default InternalVisionDetail;
