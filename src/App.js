import "fdweb/fluent-core.css";
import "fdweb/fluent-icons.css";
import './App.css';

import TopWrapper from "./components/TopWrapper";
import AboutWrapper from "./components/AboutWrapper";
import VariantsWrapper from "./components/VariantsWrapper";
import FooterWrapper from "./components/FooterWrapper";
import BenefitsWrapper from "./components/BenefitsWrapper";
import ProcessWrapper from "./components/ProcessWrapper";
import CreditWrapper from "./components/CreditWrapper";

function App() {
  return (
    <main>
      <TopWrapper/>
      <AboutWrapper />
      <BenefitsWrapper />
      <ProcessWrapper />
      <VariantsWrapper />
      <FooterWrapper />
      <CreditWrapper />
    </main>
  );
}

export default App;
