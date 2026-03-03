import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ToGo from './components/ToGo'
import Gallery from './components/Gallery'
import IceCream from './components/IceCream'
import History from './components/History'
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
        <About />
        <ToGo />
        <Gallery />
        <IceCream />
        <History />
        <Footer />
      </div>
    </main>
  )
}
