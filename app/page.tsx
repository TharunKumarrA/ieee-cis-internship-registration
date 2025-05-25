import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Topics from "@/components/home/Topics";
import Eligibility from "@/components/home/Eligibility";
import Schedule from "@/components/home/Schedule";
import Contact from "@/components/home/Contact";
import InternshipDetails from "@/components/home/InternshipDetails";
import MentorAllocation from "@/components/home/MentorAllocation";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Topics />
      <Eligibility />
      <Schedule />
      <MentorAllocation />
      <InternshipDetails />
      <Contact />
      {/* <div className="h-20 "></div> */}
    </>
  );
}
