
import { DataProvider } from "./datas/DataContaxt";
import "./App.css";
import NavBar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
import EducationSection from "./components/EducationSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <DataProvider>
      <div className="portfolio-body">
        <NavBar />
        <HomeSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </DataProvider>
  );
}

export default App;
