import ButtonGradient from './assets/svg/ButtonGradient'
import Hero from './components/Hero';

import Header from './Header';
function App() {
  return (
    <>
     
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
       <Header/>
       <Hero/>
       
      </div>

      <ButtonGradient/>

    </>
  );
}

export default App
