const Hero: React.FC = () => {
    return (
      <section className="bg-accent text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-secondary text-lg md:text-2xl mb-8">Showcasing my projects and skills.</p>
          <button className="bg-primary hover:bg-secondary px-6 py-3 rounded-lg">
            Explore My Work
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  