import IntroSection from '../components/leadership/IntroSection';
import ChallengeSection from '../components/leadership/ChallengeSection';
import LogicSection from '../components/leadership/LogicSection';
import InvestmentSection from '../components/leadership/InvestmentSection';
import ExecutiveCTA from '../components/leadership/ExecutiveCTA';

const LeadershipPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-blue-50 min-h-screen">
            <IntroSection />
            <ChallengeSection />
            <LogicSection />
            <InvestmentSection />
            <ExecutiveCTA />
        </div>
    );
};

export default LeadershipPage;
