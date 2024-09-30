import Header from "@/app/component/header";
import HeroSection from "./component/heroSection";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="outerPage">
      <Header/>
      <div>
        <HeroSection/>
      </div>
      <Footer/>
    </div>
  );
}
