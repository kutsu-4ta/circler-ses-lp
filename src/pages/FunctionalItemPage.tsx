import FunctionalIntroSection from "../components/functionalItem/FunctionalIntroSection";
import ToolCardSectionSection from "../components/functionalItem/ToolCardSectionSection";
import FunctionalCTASection from "../components/functionalItem/FunctionalCTASection";


const FunctionalItemPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen">
            {/* 1. ページ導入：なぜ“機能”が重要なのか */}
            <FunctionalIntroSection />

            {/* 2. ツール紹介カード */}
            <ToolCardSectionSection />

            {/* 3. CTA：実装支援・運用相談へ */}
            <FunctionalCTASection />
        </div>
    );
};

export default FunctionalItemPage;
