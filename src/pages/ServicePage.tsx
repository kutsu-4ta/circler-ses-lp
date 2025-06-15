import MeasurementSection from '../components/service/MeasurementSection';
import ServiceCTA from '../components/service/ServiceCTA';
import InternalCycleSection from "../components/service/InternalCycleSection";
import ExternalCycleSection from "../components/service/ExternalCycleSection";
import StrategicInvestmentSection from "../components/service/StrategicInvestmentSection";
import ModelOverviewSection from "../components/service/ModelOverviewSection";

const ServicePage: React.FC = () => {
    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen">
            {/* 1. モデル概要 */}
            <ModelOverviewSection/>

            {/* 2. 内部プロセス：育成と評価の構造 */}
            <InternalCycleSection/>

            {/* 3. 外部プロセス：顧客提案と価値転換 */}
            <ExternalCycleSection/>

            {/* 4. 投資と再現性の論理 */}
            <StrategicInvestmentSection/>

            {/*/!* 5. 指標：KGIとKPIによる成果測定 *!/*/}
            {/*<MeasurementSection/>*/}

            {/* 6. CTA：導入のご相談 */}
            <ServiceCTA/>
        </div>
    );
};

export default ServicePage;
