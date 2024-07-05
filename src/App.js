import Favicon from "react-favicon";
import "./App.css";
import Header from "./pages/home/header";
import Footer from "./pages/home/footer";
import Main from "./pages/home/main";

function App() {
  return (
    <div className="App">
      <Favicon
        url={
          "https://static-00.iconduck.com/assets.00/openai-icon-1011x1024-uztb7qme.png"
        }
      />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
