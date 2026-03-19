import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TrainingPrograms from "@/components/TrainingPrograms/TrainingPrograms";
import WhyTraining from "@/components/WhyTraining/WhyTraining";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TrainingPrograms />
      <WhyTraining />
      <Footer />
    </>
  );
}
