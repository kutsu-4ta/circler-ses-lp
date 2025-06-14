import MvvSection from "../components/aboutus/MvvSection";
import AboutMeSection from "../components/aboutus/AboutMeSection";
import FounderCard from "../components/FounderCard";

const AboutUsPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-blue-50 min-h-screen">
            <MvvSection />
            <FounderCard />
            <AboutMeSection />
        </div>
    );
};

export default AboutUsPage
