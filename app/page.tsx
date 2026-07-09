import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ToGo from './components/ToGo'
import PremiumSlider from './components/PremiumSlider'
import Gallery from './components/Gallery'
import IceCreamFacts from './components/IceCreamFacts'
import IceCream from './components/IceCream'
import NewsSection from './components/NewsSection'
import VacaturesSection from './components/VacaturesSection'
import History from './components/History'
import RouteSection from './components/RouteSection'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <Header />
      <Hero />

      {/* Content wrapper: slides OVER the sticky Hero */}
      <div className="relative z-10 bg-white shadow-[0_-20px_60px_rgba(0,0,0,0.4)] rounded-t-[3rem] md:rounded-t-[4rem]">
        <IceCreamFacts />
        <ToGo />
        <PremiumSlider />
        <About />
        <Gallery />
        <IceCream />
        <NewsSection />
        <VacaturesSection />
        <History />
        <RouteSection />
        <Footer />
      </div>
    </main>
  )
}
