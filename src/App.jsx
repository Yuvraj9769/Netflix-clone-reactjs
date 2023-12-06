import "./App.css";
import Footer from "./Footer";
import Frequen from "./Frequen";
import Header from "./Header";
import HeroCompo from "./HeroCompo";
import Login from "./Login";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <HeroCompo />
      <Frequen />
      <div className="mt-2 flex items-center justify-start ml-1">
        <Login />
      </div>
      <Footer />
      <h1 className="text-slate-50 text-xl text-center font-semibold py-3">
        &copy; Yuvraj Salte 2023
      </h1>
    </div>
  );
}

export default App;
