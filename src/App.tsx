import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";

import type { Technology } from "./types";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
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

  
  // Add technology to stack
const addToStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack([...stack, technology]);

  toast.success(`${technology.name} added to your stack!`);
};

  
  // Remove technology from stack
const removeFromStack = (id: string) => {
  const technology = stack.find(
    (item) => item.id === id
  );

  setStack(
    stack.filter((technology) => technology.id !== id)
  );

  if (technology) {
    toast.info(`${technology.name} removed from your stack.`);
  }
};

  // Remove all technologies from stack
  const removeAll = () => {
  if (stack.length === 0) {
    toast.warning("Your stack is already empty.");
    return;
  }

  setStack([]);

  toast.success("All technologies removed from your stack.");
};

  return (
    <>
      <Navbar />

      <Hero />

      {/* Technologies Section */}
      <section id="technologies" className="pt-0 pb-14 bg-gray-50">
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

          {/* Content */}
          {loading ? (
            <p className="text-gray-500">
              Loading technologies...
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Technology Cards */}
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">

  {technologies.map((technology) => (
    <TechnologyCard
      key={technology.id}
      technology={technology}
      onAdd={addToStack}
      isAdded={stack.some((item) => item.id === technology.id)}
    />
  ))}

</div>

              {/* Your Stack */}
              <StackSidebar
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
               

            </div>
          )}

        </div>
      </section>

      <Footer/>

      <ToastContainer />
    </>
  );
}

export default App;