// App.tsx
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Background from './components/Background';
import Footer from './components/Footer';
import MemberPage from "./pages/MemberPage";
import LeadershipPage from "./pages/LeadershipPage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicePage from "./pages/ServicePage";
import FunctionalItemPage from "./pages/FunctionalItemPage";
import ColumnPage from "./pages/ColumnPage";
import MotivationTheoryDetail from "./components/column/details/MotivationTheoryDetail";
import BelongingTheoryDetail from "./components/column/details/BelongingTheoryDetail";
import RecruitmentValueDetail from "./components/column/details/RecruitmentValueDetail";
import InternalVisionDetail from "./components/column/details/InternalVisionDetail";
import ExternalFactorsDetail from "./components/column/details/ExternalFactorsDetail";
import SelfMutualPublicAidDetail from "./components/column/details/SelfMutualPublicAidDetail";
import InternalBrandingDetail from "./components/column/details/InternalBrandingDetail";
import WillCanMustDetail from "./components/column/details/WillCanMustDetail";
import SelfEfficacyDetail from "./components/column/details/SelfEfficacyDetail";
import CollectiveEfficacyDetail from "./components/column/details/CollectiveEfficacyDetail";

function Container({children}: { children: React.ReactNode }) {
    return (
        <div className="w-full px-0 xl:container xl:mx-auto">
            {children}
        </div>
    );
}

function HomePage() {
    return (
        <div>
            <Container>
                <Hero/>
                <Background/>
                <Footer/>
            </Container>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Nav/>
                <main className="flex-grow bg-white">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/members" element={<MemberPage/>}/>
                        <Route path="/leaders" element={<LeadershipPage/>}/>
                        <Route path="/services" element={<ServicePage/>}/>
                        <Route path="/functions" element={<FunctionalItemPage/>}/>
                        <Route path="/column" element={<ColumnPage/>}/>
                        <Route path="/aboutUs" element={<AboutUsPage/>}/>

                        {/* コラム 人事リテラシーの提供記事 */}
                        <Route path="/column/external-factors" element={<ExternalFactorsDetail />} />
                        <Route path="/column/motivation-theory" element={<MotivationTheoryDetail />} />
                        <Route path="/column/belonging-theory" element={<BelongingTheoryDetail />} />
                        <Route path="/column/internal-vision" element={<InternalVisionDetail />} />
                        <Route path="/column/recruitment-value" element={<RecruitmentValueDetail />} />
                        <Route path="/column/self-efficacy" element={<SelfEfficacyDetail />} />
                        <Route path="/column/self-mutual-public-aid" element={<SelfMutualPublicAidDetail />} />
                        <Route path="/column/collective-efficacy" element={<CollectiveEfficacyDetail />} />
                        <Route path="/column/internal-branding" element={<InternalBrandingDetail />} />
                        <Route path="/column/will-can-must" element={<WillCanMustDetail />} />
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}
