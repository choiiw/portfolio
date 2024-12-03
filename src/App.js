import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Sidebar from "./components/SideBar/Sidebar";
import SkillsSection from "./components/SkillsSection/SkillsSection";

function App() {

  return (
    <div>
      <Sidebar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
