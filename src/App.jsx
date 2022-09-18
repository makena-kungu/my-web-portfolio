import * as React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Intro from './components/Intro';
import Projects from './components/Projects';

export default function App() {
  return (
    <main>
      <NavBar />
      <Intro/>
      <About />
      <Projects />
    </main>
  )
}
