import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import OnboardingMotion from "./components/OnboardingMotion";
import LandingPage from "./pages/LandingPage";
import FullMenuPage from "./pages/FullMenuPage";
import SpatialInfoPage from "./pages/SpatialInfoPage";
import "./App.css";

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <>
      {showOnboarding && (
        <OnboardingMotion onFinish={() => setShowOnboarding(false)} />
      )}

      <div className={showOnboarding ? "site-hidden" : ""}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<FullMenuPage />} />
          <Route path="/spatial-info" element={<SpatialInfoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;