import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
