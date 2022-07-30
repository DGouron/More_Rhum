import "./assets/Styles/css/prefixed/style.css";
import CoreButton from "./features/CoreButton";
import Footer from "./features/Footer";
import Header from "./features/Header";
import ResearchBox from "./features/research/ResearchBox";

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreButton />
        <ResearchBox />
      </main>
      <Footer />
    </>
  );
}

export default App;
