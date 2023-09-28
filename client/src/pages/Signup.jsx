import X from "../assets/x.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  const handleLogin = async () => {
    window.open("http://localhost:3001/auth/google/callback", "_self");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <div className="flex flex-col gap-16 bg-white shadow-md rounded-lg p-4">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <img className="w-16 h-16 rounded-full" src={X} alt="X" />
            </div>
            <div className="p-1">
              <p className="text-lg font-extrabold text-gray-700">xQRCode</p>
            </div>
          </div>
          {/* Google */}
          <div className="flex items-center justify-center pb-1">
            <button
              onClick={handleLogin}
              className="bg-black hover:bg-slate-700 text-white p-2 rounded-lg w-60"
            >
              <div className="flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faGoogle} size="xl" />
                <p className="text-lg">signin with google</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
