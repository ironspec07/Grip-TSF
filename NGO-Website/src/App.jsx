import Header from "./components/Header";
import Footer from "./components/Footer";
import image1 from "./images/image1.jpeg";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <section className="container mx-auto mt-8">
        <div className="flex justify-center">
          <img src={image1} alt="Image 1" className="w-5/12 rounded-xl" />
        </div>
      </section>
      <section className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">
          Our Mission: Bringing Hope, Building Futures
        </h2>
        <p className="text-gray-700">
          At NGO, our mission is to create a world where every orphaned child is
          not just cared for but is nurtured, empowered, and given the chance to
          build a promising future. We believe that every child deserves love,
          support, and opportunities to thrive.
        </p>
      </section>
      <section className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
        <p className="text-gray-700">
          Together, we can make a profound impact on the lives of orphaned
          children. Join us on this journey of compassion, empowerment, and
          transformation. Together, let's build a future where every child's
          potential is recognized and fulfilled.
        </p>
        <div>
          <h3 className="text-gray-900">
            Donate, Volunteer, Advocate — Be the Change!
          </h3>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
