import { MainLayout } from './components/layout/MainLayout';
import { Header } from './components/layout/Header';
import { TopicGrid } from './features/topics/components/TopicGrid';

function App() {
  return (
    <MainLayout>
      <Header />
      
      <main className="mt-10 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Select Your Focus
          </h2>
          <p className="text-navy/80 max-w-2xl mx-auto">
            Explore our curated guides to help you navigate uncertainty and make confident decisions about your future.
          </p>
        </div>
        
        <TopicGrid />
      </main>
    </MainLayout>
  );
}

export default App;