import { MainLayout } from './components/layout/MainLayout';
import { Header } from './components/layout/Header';
import { TopicGrid } from './features/topics/components/TopicGrid';

function App() {
  return (
    <MainLayout>
      <Header />

      <main className="mt-6 mb-16 md:mt-10 md:mb-24">
        <section className="theme-panel overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <div className="max-w-3xl">
            <span className="theme-badge mb-5">Find clarity. Choose your direction. Take your next step.</span>
            <h2 className="text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Discover calm clarity for the life you are building.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-navy/80">
              A thoughtful guide for women navigating uncertainty, helping you understand where you are and choose what matters next.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#focus-areas"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 font-semibold text-cream transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
              >
                Explore the guide
              </a>
              <a
                href="#focus-areas"
                className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-white/70 px-6 py-3 font-semibold text-navy transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                View focus areas
              </a>
            </div>
          </div>
        </section>

        <section id="focus-areas" className="mt-10">
          <div className="mb-6 flex justify-center">
            <h3 className="text-3xl font-semibold text-navy md:text-4xl">
              Pick Your Focus
            </h3>
          </div>

          <TopicGrid />
        </section>
      </main>
    </MainLayout>
  );
}

export default App;