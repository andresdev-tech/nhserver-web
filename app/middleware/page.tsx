import Sidebar from '../components/Sidebar';
import Middleware from '../components/Middleware';
import Footer from '../components/Footer';

export default function MiddlewarePage() {
  return (
    <div className="bg-[#0D0F12] text-white min-h-screen">
      <Sidebar />
      <main className="lg:ml-64">
        <Middleware />
        <Footer />
      </main>
    </div>
  );
}
