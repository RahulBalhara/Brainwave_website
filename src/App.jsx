import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Services from './components/Services';
import Header from './Header';
import Footer from './components/footer';
function App() {
  return (
    <>
     
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
       <Header/>
       <Hero/>
       <Benefits/>
       <Collaboration/>
       <Services/>
       <Pricing/>
       <Roadmap/>
       <Footer/>
       
      </div>

      <ButtonGradient/>

    </>
  );
}

export default App
