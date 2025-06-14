// App.tsx
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Background from './components/Background';
import Plan from './components/Plan';
import Footer from './components/Footer';
import MemberPage from "./pages/MemberPage";
import LeadershipPage from "./pages/LeadershipPage";
import ExecutiveRoleDetails from "./components/leadership/details/ExecutiveRoleDetails";
import ChallengeDetails from "./components/leadership/details/ChallengeDetails";
import InvestmentDetails from "./components/leadership/details/InvestmentDetails";
import LogicDetails from "./components/leadership/details/LogicDetails";
import AboutUsPage from "./pages/AboutUsPage";
import ServicePage from "./pages/ServicePage";

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
                        <Route path="/aboutUs" element={<AboutUsPage/>}/>

                        {/*経営向け 詳細ページ*/}
                        <Route path="/leaders/details/challenge" element={<ChallengeDetails/>}/>
                        <Route path="/leaders/details/logic" element={<LogicDetails/>}/>
                        <Route path="/leaders/details/investment" element={<InvestmentDetails/>}/>
                        <Route path="/leaders/details/executive" element={<ExecutiveRoleDetails/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}