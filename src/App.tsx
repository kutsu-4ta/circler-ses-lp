// App.tsx
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Background from './components/Background';
import Strategy from './components/Strategy';
import Tactics from './components/Tactics';
import Plan from './components/Plan';
import Footer from './components/Footer';
import MemberPage from "./pages/MemberPage";

function Container({ children }: { children: React.ReactNode }) {
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
                <Hero />
                <Background />
                <Footer />
            </Container>
        </div>
    );
}

function LeadersPage() {
    return (
        <Container>
            <Container>
                <Plan/>
            </Container>
        </Container>
    );
}

function AboutUs() {
    return (
        <Container>
            <Container>
                <Plan/>
            </Container>
        </Container>
    );
}

export default function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col overflow-x-hidden">
                <Nav/>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/members" element={<MemberPage/>}/>
                        <Route path="/leaders" element={<LeadersPage/>}/>
                        <Route path="/aboutUs" element={<AboutUs/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}