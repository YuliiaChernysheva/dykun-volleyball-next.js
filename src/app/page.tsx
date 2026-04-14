import About from "@/components/About/About";
import Booking from "@/components/Booking/Booking";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Reviews from "@/components/Reviews/Reviews";
import TrainingPrograms from "@/components/TrainingPrograms/TrainingPrograms";
import WhyTraining from "@/components/WhyTraining/WhyTraining";
import { galleryImages } from "@/data/gallery";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TrainingPrograms />
      <WhyTraining />
      <Reviews />
      <Gallery images={galleryImages} />
      <Booking />
      <Footer />
    </>
  );
}
