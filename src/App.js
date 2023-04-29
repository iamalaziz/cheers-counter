import "./styles.css";
import { useState } from "react";
import Beer from "./beer.png";
import { useSound } from "use-sound";
import GlassSound from "./glass-sound.mp3";
import SoundOn from "./audio.png";

export default function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [play] = useSound(GlassSound, { volume: 0.25 });

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      if (!isActive) {
        setCount((prev) => (prev = prev + 1));
      }
    }, 1500);
    play();
  };

  return (
    <div className="App">
      <button onClick={handleClick} className={`${isActive ? "cheer" : null}`}>
        <div className="count-num">{count}</div>
        <div className="container">
          <img src={Beer} alt="Beer Left" className="left" />

          <img src={Beer} alt="Beer Right" className="right" />
        </div>
      </button>
      <div className="sound-on">
        <p>
          Sound On
          <span>
            <img src={SoundOn} alt="Sound On icon" />
          </span>
        </p>
      </div>
    </div>
  );
}
