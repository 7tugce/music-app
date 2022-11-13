import Download from "./Download";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Search from "./Search";

export default function Home() {
  return (
    <div className="App text-[#584153] overflow-hidden">
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}
