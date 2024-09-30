import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="outerPage">
      <Header/>
      <div className="parent-container">
        <div className="child-container">
            <div className="child-container-img">
            <Image src="/images/_MG_8761.jpg" alt="My image" width={150} height={300}/>
            </div>
            <br/>
          <p>Welcom in <strong>Portfoio</strong></p>
        </div>  
      </div>
      <Footer/>
    </div>
  );
}
