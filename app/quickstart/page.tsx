import Sidebar from '../components/Sidebar';
import QuickStart from '../components/QuickStart';
import Footer from '../components/Footer';

export default function QuickStartPage(): JSX.Element {
  return (
    <div className="bg-[#0D0F12] text-white min-h-screen">
      <Sidebar />
      <main className="lg:ml-64">
        <QuickStart />
        <Footer />
      </main>
    </div>
  );
}
