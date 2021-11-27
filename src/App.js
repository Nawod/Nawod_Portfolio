import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import SmoothScrollBar from './components/SmoothScrollBar';
import About from './page/About';
import Contact from './page/Contact';
import Home from './page/Home';
import Projects from './page/Projects';

export default function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <SmoothScrollBar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </SmoothScrollBar>
      </Router>
    </div>
  );
}
