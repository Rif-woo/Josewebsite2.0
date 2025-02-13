import AboutUs from "@/components/aboutus";
import ContactSection from "@/components/Contact";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import ProductShow from "@/components/ProductShow";
import ProductVideo from "@/components/ProductVideo";
import { Testimonials } from "@/components/ui/testimonials";

export default function Home() {
  return (
   <div>
    <Header />
    <ProductShow />
    <ProductVideo/>
    <AboutUs />
    <Testimonials />
    <ContactSection />
    <Footer />
   </div>
  );
}
