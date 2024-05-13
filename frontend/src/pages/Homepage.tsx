import Navbar from '../components/Navbar';
import Caraousel from '../components/Caraousel';
import About from '../components/About';
import Footer from '../components/Footer';
import Achievements from '../components/Achievements';
import Newsletter from '../components/Newsletter';
import Impacts from '../components/Impacts';
import Maps from '../components/Maps';
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
        <section className='mt-20 mb-20'>
          <Maps />
        </section>
        {/* <Achievements /> */}
        {/* <Maps /> */}
        <Footer />
    </div>
  )
}
