import Hero from '../components/Hero';
import Services from '../components/Services';
import Locations from '../components/Locations';
import About from '../components/About';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      
      <About />
      <Locations />
    </>
  );
}

export default Home;