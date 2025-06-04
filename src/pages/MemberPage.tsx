import HeroSection from '../components/member/HeroSection';
import WorkChangeSection from "../components/member/WorkChangeSection";
import YourActionSection from "../components/member/YourActionSection";
import BelongingSection from "../components/member/BelongingSection";
import FutureSection from "../components/member/FutureSection";
import CTASection from "../components/member/CTASection";

const MemberPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            <HeroSection />
            <WorkChangeSection />
            <BelongingSection />
            <YourActionSection />
            <FutureSection />
            <CTASection />
        </div>
    );
};

export default MemberPage;
