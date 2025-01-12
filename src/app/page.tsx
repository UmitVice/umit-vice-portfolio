import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <section className="container mx-auto py-20">
        <h2 className="text-primary text-3xl font-bold mb-6">About Me</h2>
        <p className="text-secondary  text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet est a dui aliquet hendrerit.</p>
      </section>
    </div>
  );
}
