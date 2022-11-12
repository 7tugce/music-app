import { useEffect } from "react";
import { Router } from "react-router";
import "./App.css";
import Download from "./components/Download";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import { signUp ,signIn } from "./config/firebase";

function App() {

  return (
    <div className="App text-[#584153] overflow-hidden">
     
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
