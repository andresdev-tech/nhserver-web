import Sidebar from '../components/Sidebar';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function FeaturesPage() {
  return (
    <div className="bg-[#0D0F12] text-white min-h-screen">
      <Sidebar />
      <main className="lg:ml-64">
        <Features />
        <Footer />
      </main>
    </div>
  );
}
