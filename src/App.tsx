// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Background from './components/Background';
import Strategy from './components/Strategy';
import Tactics from './components/Tactics';
import Plan from './components/Plan';
import Footer from './components/Footer';

function Container({ children }: { children: React.ReactNode }) {
    return <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
}

function HomePage() {
    return (
        <Container>
            <Container>
                <Hero />
            </Container>
            <Container>
                <Background />
            </Container>
            <Container>
                <Footer />
            </Container>
        </Container>
    );
}

function MembersPage() {
    return (
        <Container>
            <Container>
                <Strategy />
            </Container>
            <Container>
                <Tactics />
            </Container>
            <Container>
                <Footer />
            </Container>
        </Container>
    );
}

function LeadersPage() {
    return (
        <Container>
            <Container>
                <Plan />
            </Container>
            <Container>
                <Footer />
            </Container>
        </Container>
    );
}

export default function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Nav />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {/*<Route path="/members" element={<MembersPage />} />*/}
                        {/*<Route path="/leaders" element={<LeadersPage />} />*/}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}