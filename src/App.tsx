import { Route, Routes } from "react-router";
import Header from "./component/Header/Header";
import Homepage from "./layout/Homepage/Homepage";
import Projects from "./layout/Projects/Projects";
import Showcase from "./layout/Showcase/Showcase";
import {LanguageProvider} from "./context/LanguageContext";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <LanguageProvider>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </LanguageProvider>
  );
}

export default App
