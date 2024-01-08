import { useState } from 'react'
import image1 from './images/image1.jpeg';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100">
    <header className="bg-blue-500 text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">NGO</h1>
            <p className="text-lg">Making a difference in the world</p>
          </div>
          <div>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-full">
              Donate Now
            </button>
          </div>
        </div>
      </header>

    <section className="container mx-auto mt-8">
      <div className='flex justify-center '>
            <img src={image1} alt="Image 1" className="w-5/12 rounded-xl" />
          </div>
    </section>
    <section className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Our Mission: Bringing Hope, Building Futures</h2>
      <p className="text-gray-700">
      At NGO, our mission is to create a world where every orphaned child is not just cared for but is nurtured, empowered, and given the chance to build a promising future. We believe that every child deserves love, support, and opportunities to thrive.
      </p>
    </section>
    <section className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
      <p className="text-gray-700">
      Together, we can make a profound impact on the lives of orphaned children. Join us on this journey of compassion, empowerment, and transformation. Together, let's build a future where every child's potential is recognized and fulfilled.
      <h3 className='text-gray-900'>Donate, Volunteer, Advocate — Be the Change!</h3>
      </p>
    </section>

    <footer className="bg-blue-500 text-white text-center py-4">
      &copy; 2024 NGO. All rights reserved.
    </footer>
  </div>
  )
}

export default App
