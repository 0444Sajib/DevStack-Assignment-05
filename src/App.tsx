import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";

import type { Technology } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      {/* Technologies Section */}
      {/* Technologies Section */}
<section id="technologies" className="py-14 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">

    {/* Section Title */}
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Explore Technologies
      </h2>

      <p className="text-gray-500 mt-2">
        Choose the technologies you want to add to your development stack.
      </p>
    </div>

    {/* Loading */}
    {loading ? (
      <p className="text-gray-500">
        Loading technologies...
      </p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}

      </div>
    )}

  </div>
</section>
    </>
  );
}

export default App;