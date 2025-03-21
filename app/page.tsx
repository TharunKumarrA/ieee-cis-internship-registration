import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Topics from '@/components/home/Topics';
import Eligibility from '@/components/home/Eligibility';
import Schedule from '@/components/home/Schedule';
import Registration from '@/components/home/RegistrationForm';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Topics />
      <Eligibility />
      <Schedule />
      <Registration />
      <Contact />
    </>
  );
}