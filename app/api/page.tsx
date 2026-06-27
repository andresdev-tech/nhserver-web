import Sidebar from '../components/Sidebar';
import APIReference from '../components/APIReference';
import Footer from '../components/Footer';

export default function APIPage(): JSX.Element {
  return (
    <div className="bg-[#0D0F12] text-white min-h-screen">
      <Sidebar />
      <main className="lg:ml-64">
        <APIReference />
        <Footer />
      </main>
    </div>
  );
}
