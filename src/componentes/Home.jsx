import { useState, useEffect } from "react";
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const banners = [banner1, banner2, banner3];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <h1>Bienvenido a Factor BMX</h1>
      <img src={banners[index]} alt="Banner rotativo" className="banner" />
    </div>
  );
}

export default Home;
