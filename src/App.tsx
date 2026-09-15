import './App.css';
import KineticGrid from '@/components/ui/kinetic-grid';

function App() {
  return (
    <KineticGrid>
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 rounded-full border border-white/15 px-3 py-1 text-m font-medium tracking-wide text-white">
          @zoerlyx : welcome guys 😁
        </span> 
      </main>
    </KineticGrid>
  );
}

export default App;
