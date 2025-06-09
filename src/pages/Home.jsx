
import Start from "../components/Start"
import Footer from "../components/Footer";
import '../css/Home.css'
import { useEffect, useState } from 'react';

const tags = ["(Physics Nerd)", "(Pro Gamer)", "(Writer)",];

function Home() {
  
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % tags.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <> 
        <div className="home-content">
          <div className="dark-reader">Look's like you are using dark reader, consider disabling it for a better experience</div>
            <div className="topper">
                <h2 className="text-bottom-shadow">Welcome to the adventures of</h2>
                <h1 className="text-6xl font-retro text-yellow-400 text-bottom-shadow">SOHAM RANE</h1>
                <div className="tag-line animate-blink">
                {tags[currentTagIndex]}
                </div>
                    <h3 className="text-bottom-shadow">Web Designer and Programmer</h3>
            </div> 
        </div>
        <Start/>
        <Footer />
    </>

  );
}


export default Home