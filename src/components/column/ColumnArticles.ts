import {externalFactorsMeta} from "./details/ExternalFactorsDetail";
import {belongingTheoryMeta} from "./details/BelongingTheoryDetail";
import {collectiveEfficacyMeta} from "./details/CollectiveEfficacyDetail";
import {internalBrandingMeta} from "./details/InternalBrandingDetail";
import {internalVisionMeta} from "./details/InternalVisionDetail";
import {motivationTheoryMeta} from "./details/MotivationTheoryDetail";
import {recruitmentValueMeta} from "./details/RecruitmentValueDetail";
import {selfEfficacyMeta} from "./details/SelfEfficacyDetail";
import {willCanMustMeta} from "./details/WillCanMustDetail";
import {valueDefinitionMeta} from "./details/ValueDefinitionDetail";
import {belongingAndGrowthMeta} from "./details/BelongingAndGrowthDetail";
import {proposalStructureDetailMeta} from "./details/ProposalStructureDetail";
import {selfMutualPublicAidMeta} from "./details/SelfMutualPublicAidDetail";


export const columnArticles = [
    {
        ...externalFactorsMeta,
        description: "少子高齢化・ジョブ型移行・人的資本開示など、なぜ今、人材育成戦略が必要とされるのかを解説します。",
    },
    {
        ...belongingTheoryMeta,
        description: "MVV・評価・1on1・社内発信などを通じて、組織に「居場所」と「自分ごと感」を持たせる手法を解説します。",
    },
    {
        ...collectiveEfficacyMeta,
        description: "組織に漂う「できそう」「信頼できる」という空気感を、どうやって戦略的に育てていくかを解説します。"
    },
    {
        ...internalBrandingMeta,
        description: "MVVを軸に社員の文化資本を可視化・翻訳することで、内発的な共感とブランディングを生み出す仕組みを解説します。",
    },
    {
        ...internalVisionMeta,
        description:
            "「提案できるSE」を育てることが、なぜそのまま採用力・信頼力・発信力につながるのかを示します。",
    },
    {
        ...motivationTheoryMeta,
        description:
            "SDT理論、二要因論、エンゲージメント構造論など、行動経済と動機付けに基づく組織設計を紹介します。",
    },
    {
        ...recruitmentValueMeta,
        description: "コンピテンシーと社員カルテに基づき、文化に共鳴する人を採用・定着・活躍へ導く戦略を説明します。",
    },
    {
        ...selfEfficacyMeta,
        description:
            "組織に漂う「できそう」「信頼できる」という空気感を、どうやって戦略的に育てていくかを解説します。",
    },
    {
        ...selfMutualPublicAidMeta,
        description:
            "1on1・評価制度・ツール活用を通じて、支援構造がどのように循環を生むかを整理します。",
    },
    {
        ...willCanMustMeta,
        description:
            "社員と会社の意志・能力・期待の重なりから目標をつくるフレームワークの実践例を紹介します。",
    },
    {
        ...valueDefinitionMeta,
        description: "価格ではなく“自社の定義”で価値を決める。人材育成・ブランディング・経営判断をつなぐ視点を紹介します。",
    },
    {
        ...belongingAndGrowthMeta,
        description: "現場の先輩に憧れながらも、自社にその姿を重ねられない。SEが感じる“帰属と成長のズレ”を見つめ直し、組織が希望を与える仕組みを考えます。"
    },
    {
        ...proposalStructureDetailMeta,
        description: "営業担当者の経験と感覚に依存した提案は、再現性と効率性の観点から限界を迎えています。本記事では、構造的な育成戦略と連動した営業モデルによって、営業コスト削減と満足度向上を両立させる方法を解説します。"
    },
    // 他の記事をここに追加
];
