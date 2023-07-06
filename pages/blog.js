import Blogs from "../components/Blogs/Blog";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


export default function Blog() {
  
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <Blogs />
      <Footer />
    </div>
  );
};

