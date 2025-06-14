import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import IntroSection from '../components/leadership/IntroSection';
import ChallengeSection from '../components/leadership/ChallengeSection';
import LogicSection from '../components/leadership/LogicSection';
import TacticsSection from '../components/leadership/TacticsSection';
import ExecutiveCTA from '../components/leadership/ExecutiveCTA';

const LeadershipPage: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen overflow-x-hidden">
            {/* 1. Heroセクション */}
            <section className="bg-gradient-to-br from-indigo-50 to-white">
                <IntroSection />
            </section>

            {/* 2. 背景課題 */}
            <section className="bg-white relative z-10 py-24 px-4" data-aos="fade-up">
                <ChallengeSection />
            </section>

            {/* 3. モデル紹介 */}
            <section className="bg-indigo-50 py-24 px-4 rounded-t-3xl shadow-inner" data-aos="fade-up">
                <LogicSection />
            </section>

            {/* 4. 戦術/仕組み */}
            <section className="bg-white py-24 px-4 border-t border-indigo-100" data-aos="fade-up">
                <TacticsSection />
            </section>

            {/* 5. 経営層CTA */}
            <section className="bg-indigo-900 text-white py-24 px-4" data-aos="fade-up">
                <ExecutiveCTA />
            </section>
        </div>
    );
};

export default LeadershipPage;
