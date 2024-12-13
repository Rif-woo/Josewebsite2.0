import Header from "@/components/Header";
import ProductShow from "@/components/ProductShow";
import ProductVideo from "@/components/ProductVideo";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Header />
    <ProductShow />
    <ProductVideo/>
   </div>
  );
}
