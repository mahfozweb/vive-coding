import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
