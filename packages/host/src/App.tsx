import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import './App.css';
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState(localStorage.getItem('color') || '');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosenColor = e.target.value;
    const frame = document.getElementById('chatBot') as HTMLIFrameElement;
    setColor(chosenColor);
    localStorage.setItem('color', chosenColor);
    if(frame) frame.contentWindow?.postMessage({color: chosenColor}, document.location.href);
  };

  return (
    <>
      <ColorPicker
        value={color}
        onChange={handleColorChange}
      />
      <ChatBotIFrame/>
    </>
  );
}

export default App;
