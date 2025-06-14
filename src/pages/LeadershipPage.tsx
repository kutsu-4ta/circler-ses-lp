import IntroSection from '../components/leadership/IntroSection';
import ChallengeSection from '../components/leadership/ChallengeSection';
import LogicSection from '../components/leadership/LogicSection';
import TacticsSection from '../components/leadership/TacticsSection';
import ExecutiveCTA from '../components/leadership/ExecutiveCTA';
import BrandingVisionSection from "../components/leadership/BrandingVisionSection";

const LeadershipPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen overflow-x-hidden">
            {/* 1. Heroセクション */}
            <section className="bg-gradient-to-br from-indigo-50 to-white">
                <IntroSection />
                <BrandingVisionSection/>
            </section>

            {/* 2. 背景課題 */}
            <section className="bg-white relative z-10 py-24 px-4">
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-indigo-100 to-transparent z-[-1]" />
                <ChallengeSection />
            </section>

            {/* 3. モデル紹介 */}
            <section className="bg-indigo-50 py-24 px-4 rounded-t-3xl shadow-inner">
                <LogicSection />
            </section>

            {/* 4. 戦術/仕組み */}
            <section className="bg-white py-24 px-4 border-t border-indigo-100">
                <TacticsSection />
            </section>

            {/* 5. 経営層CTA */}
            <section className="bg-indigo-900 text-white py-24 px-4">
                <ExecutiveCTA />
            </section>
        </div>
    );
};

export default LeadershipPage;
