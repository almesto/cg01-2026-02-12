import Header from './components/Header';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PropertyList />
      </main>
      <Footer />
    </div>
  );
}
