import "./assets/Styles/css/prefixed/style.css";
import CoreButton from "./features/CoreButton";
import Footer from "./features/Footer";
import MoneyView from "./features/MoneyView";
import ResearchBox from "./features/research/ResearchBox";

function App() {

  return (
    <>
      <header>
      </header>
      <main>
        <MoneyView />
        <CoreButton />
        <ResearchBox />
      </main>
      <Footer />
    </>
  );
}

export default App;
