import ColumnLayout from "../../../components/column/ColumnLayout";

export const selfMutualPublicAidMeta = {
    id: "self-mutual-public-aid",
    title: "自助・共助・公助で組織は循環する",
    author: "山下 将史",
    date: "2025年6月16日",
    category: "組織開発",
    tags: [
        "社員エンゲージメント",
        "自助共助公助",
        "対話",
        "サーキュラーSES",
        "支援設計",
    ],
};

const SelfMutualPublicAidDetail: React.FC = () => (
    <ColumnLayout
        title={selfMutualPublicAidMeta.title}
        author={selfMutualPublicAidMeta.author}
        date={selfMutualPublicAidMeta.date}
        category={selfMutualPublicAidMeta.category}
        tags={selfMutualPublicAidMeta.tags}
    >
        <p className="text-lg leading-relaxed mb-6">
            組織における社員エンゲージメントを高めるためには、<b>自助・共助・公助</b>の視点が不可欠です。<br />
            これは本来、福祉や災害支援の文脈で用いられる考え方ですが、組織においても驚くほど当てはまります。
        </p>

        <div className="flex justify-center my-8">
            <img
                src="/column/self-mutual-public.png"
                alt="自助共助公助"
                className="max-w-full h-auto rounded "
            />
        </div>

        <p className="text-lg leading-relaxed mb-6">
            しかしこの3つは、そのまま<b>言い訳のループ</b>にもなり得ます。
        </p>

        <p className="text-base leading-relaxed mb-6 italic">
            「自分が動かないのは、会社に仕組みがないからだ」<br />
            「会社が仕組みを作らないのは、どうせ誰も使わないからだ」
        </p>

        <p className="text-lg leading-relaxed mb-6">
            このように、自助が止まり、公助が止まり、共助も生まれない。<br />
            問題は「実行が足りないこと」ではありません。<b>目的を共有するための“対話”が欠けている</b>のです。
        </p>

        <p className="text-lg leading-relaxed mb-6">
            組織と個人が同じ地図を持ち、同じ目的地を見据えられたとき、<br />
            初めて<b>「セーの」で踏み出す一歩</b>が可能になります。<br />
            この一歩が回り出せば、自助・共助・公助は互いに循環し、<b>自走する組織</b>が生まれていきます。
        </p>

        <p className="text-base leading-relaxed mb-6">
            私たちのサーキュラーSESモデルでは、この3つの支援を以下のように設計しています：
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2 text-base">
            <li><b>自助</b>：現場での業務・自己目標の明確化</li>
            <li><b>共助</b>：1on1や他者との対話による相互理解と感情共有</li>
            <li><b>公助</b>：社員カルテやカオナビ・Salesforceによる客観データと営業活動</li>
        </ul>

        <p className="text-base leading-relaxed mb-6">
            これらは単独では意味を成しません。<br />
            重要なのは、「誰かが動くからこそ、他の支援も活きる」という<b>補完関係の設計</b>です。
        </p>

        <p className="text-base leading-relaxed mb-6">
            対話によって目的が共有され、行動が連鎖し、支援が循環する。<br />
            それが、真に“自走する組織”の原動力です。
        </p>
    </ColumnLayout>
);

export default SelfMutualPublicAidDetail;
