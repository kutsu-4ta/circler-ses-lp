import Plan from "../components/Plan";
import CultureQuote from "../components/aboutus/CultureQuote";
import MvvSection from "../components/aboutus/MvvSection";

const AboutUsPage: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-blue-50 min-h-screen">
            <MvvSection />
            <CultureQuote />
            <Plan />
            {/*<TeamMessage />*/}
        </div>
    );
};

export default AboutUsPage
