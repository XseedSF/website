import React, { Component } from 'react';
import './App.css';
import './TeamPage.css';
import './Portfolio.css';
import './hamburgers.css';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HeaderSection from './components/HeaderSection';
import HowWeWork from './components/HowWeWork';
import Portfolio from './components/Portfolio.js';
import TestimonialsSection from './components/Testimonials.js';
import Team from './components/Team.js';
import Contact from './components/Contact.js';


import TeamPage from './components/TeamPage.js';

import PortfolioPage from './components/PortfolioPage';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({offset: -0, scrollDuration: 800});

const HomeApp = () => (
    <div className="App">
        <ScrollableAnchor id={'home'}>
            <div>
            <HeaderSection />
            </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'hww'}>
            <div>
                <HowWeWork />
            </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'portfolio'}>
            <div>
                <Portfolio />
                <TestimonialsSection />
            </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'team'}>
                <div>
                    <Team />
                </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
                <div>
                    <Contact />
                </div>
        </ScrollableAnchor>

    </div>
);

class App extends Component {

    render() {
        const ScrollToTop = () => {
          window.scrollTo(0, 0);
          return null;
        };
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <div>
                    <Route exact={true} path="/" component={HomeApp} />

                    <Route path="/team" component={ScrollToTop} />
                    <Route path="/team" component={TeamPage} />
                    <Route path="/portfolio" component={ScrollToTop} />
                    <Route path="/portfolio/:portfolioId" component={PortfolioPage} />
                </div>
            </Router>
        );
  }
}

export default App;
