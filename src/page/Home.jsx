import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <img src="image.jpg" alt="Home Services" className="w-full h-[563px] object-cover" />
        </div>
        
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col space-y-3">
        <Link to="/Login">
          <button href="/Login" className="bg-white w-64 text-black py-0.5 rounded-lg shadow-md border-black border-[1px]">
            Log in
          </button>
          </Link>
          <Link to="/CreateAccount">
          <button className="bg-white text-black w-64  py-0.5 rounded-lg shadow-md border-black border-[1px]">
            Create Account
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;