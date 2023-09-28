import { Routes, Route } from "react-router-dom";
import { Home, Signup, Payment, NotFound } from "./pages/index";
import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  // TODO Implement loading func.
  // const [loading, setLoading] = useState(false);

  // Fetch User Data After Successful Auth.
  const fetchUser = async () => {
    try {
      const url = "http://localhost:3001/auth/success";
      const response = await fetch(url, { credentials: "include" });

      if (!response.ok) {
        throw new Error(`Error fetching user data: ${response.statusText}`);
      }

      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
