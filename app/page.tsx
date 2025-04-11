import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
      </div>
      <div>
        <p className="text-5xl font-extralight ml-10 mt-40 pb-14">Selected Works</p>
        <Work />
      </div>
      <Footer />
    </>
  );
}
