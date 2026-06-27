import Link from 'next/link';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function Home(): JSX.Element {
  return (
    <div className="bg-[#0D0F12] text-white min-h-screen">
      <Sidebar />
      <main className="lg:ml-64">
        <Hero />
        <Stats />
        
        <section className="max-w-[900px] mx-auto px-8 py-20">
          <p className="font-mono text-xs text-[#7C6AFF] uppercase tracking-[0.1em] mb-3">
            Explorar
          </p>
          <h2 className="text-[1.8rem] font-semibold mb-3 tracking-[-0.02em]">
            Conoce más sobre NHServer.
          </h2>
          <p className="text-[#8892A4] mb-10 max-w-[540px]">
            Descubre todas las características, middleware, API reference y el roadmap del proyecto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/features" className="bg-[#13161A] border border-[#2A2F38] rounded-[10px] p-6 hover:border-[#7C6AFF] transition-colors">
              <h3 className="text-lg font-medium mb-2">Features</h3>
              <p className="text-sm text-[#8892A4]">Enrutamiento, middleware, cero dependencias y más.</p>
            </Link>
            <Link href="/quickstart" className="bg-[#13161A] border border-[#2A2F38] rounded-[10px] p-6 hover:border-[#7C6AFF] transition-colors">
              <h3 className="text-lg font-medium mb-2">Quick Start</h3>
              <p className="text-sm text-[#8892A4]">De cero a servidor en 10 líneas de código.</p>
            </Link>
            <Link href="/middleware" className="bg-[#13161A] border border-[#2A2F38] rounded-[10px] p-6 hover:border-[#7C6AFF] transition-colors">
              <h3 className="text-lg font-medium mb-2">Middleware</h3>
              <p className="text-sm text-[#8892A4]">CORS, logger, bodyParser y secureHeaders incluidos.</p>
            </Link>
            <Link href="/api" className="bg-[#13161A] border border-[#2A2F38] rounded-[10px] p-6 hover:border-[#7C6AFF] transition-colors">
              <h3 className="text-lg font-medium mb-2">API Reference</h3>
              <p className="text-sm text-[#8892A4]">Documentación completa de Request y Response.</p>
            </Link>
            <Link href="/roadmap" className="bg-[#13161A] border border-[#2A2F38] rounded-[10px] p-6 hover:border-[#7C6AFF] transition-colors">
              <h3 className="text-lg font-medium mb-2">Roadmap</h3>
              <p className="text-sm text-[#8892A4]">Lo que viene en futuras versiones de NHServer.</p>
            </Link>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
}
