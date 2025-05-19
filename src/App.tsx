import { Route, Routes } from "react-router";
import Header from "./component/Header/Header";
import Homepage from "./layout/Homepage/Homepage";
import Projects from "./layout/Projects/Projects";
import Showcase from "./layout/Showcase/Showcase";
import {LanguageProvider} from "./context/LanguageContext";
import Footer from "./component/Footer/Footer";
import { APP_PAGES, PAGE_HOME, PAGE_PROJECTS, PAGE_SHOWCASE } from "./config/pages.config";

import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div style={{display: "grid", gridTemplateRows: "auto auto 1fr", height: "100%"}}>
        <header>
          <Header />
        </header>
        <div className="app-content">
          <Routes>
            <Route path={APP_PAGES[PAGE_HOME].link} element={<Homepage />} />
            <Route path={APP_PAGES[PAGE_PROJECTS].link} element={<Projects />} />
            <Route path={APP_PAGES[PAGE_SHOWCASE].link} element={<Showcase />} />
          </Routes>
        </div>
        <footer className="bgc-emphasis h-100">
          <Footer />
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App
