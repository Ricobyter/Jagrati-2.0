import Navbar from '../components/Navbar';
import Caraousel from '../components/Caraousel';
import About from '../components/About';
import Footer from '../components/Footer';
// import Maps from '../components/Maps2.jsx'

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <section>

        <Caraousel />
      </section>
        <About />
        {/* <Maps /> */}
        <Footer />
    </div>
  )
}
