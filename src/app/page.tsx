import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet est a dui aliquet hendrerit.</p>
      </section>
    </div>
  );
}
