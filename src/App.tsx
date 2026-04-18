import { MainLayout } from './components/layout/MainLayout';

function App() {
  return (
    <MainLayout>
      <header className="py-6 flex justify-between items-center border-b border-gold/20 mb-10">
        <h1 className="text-3xl font-bold">The Next Chapter</h1>
      </header>
      
      <main>
        <p className="text-lg">Your journey starts here.</p>
      </main>
    </MainLayout>
  );
}

export default App;