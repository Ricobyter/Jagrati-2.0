import Navbar from '../components/HomePage/Navbar';
import Caraousel from '../components/HomePage/Caraousel';
import About from '../components/HomePage/About';
import Footer from '../components/HomePage/Footer';
import Achievements from '../components/HomePage/Achievements';
import Newsletter from '../components/HomePage/Newsletter';
import Impacts from '../components/HomePage/Impacts';
import Maps from '../components/HomePage/Maps';

// import Maps from '../components/Maps2.jsx'

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <section>

        <Caraousel />
      </section>
        <About />
        <Impacts />
        <Newsletter />
        <Achievements />
        <section className='mt-20 mb-20'>
          <Maps />
        </section>
        <Footer />
    </div>
  )
}
