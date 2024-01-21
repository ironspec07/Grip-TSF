import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">NURTURE</h1>
          <p className="text-lg">Making a difference in the world</p>
        </div>
        <div>
          <Link to="/donate">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-full">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
