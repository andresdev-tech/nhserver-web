import Sidebar from '../components/Sidebar';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

export default function RoadmapPage() {
  return (
    <div className="bg-[#0D0F12] text-white min-h-screen">
      <Sidebar />
      <main className="lg:ml-64">
        <Roadmap />
        <Footer />
      </main>
    </div>
  );
}
