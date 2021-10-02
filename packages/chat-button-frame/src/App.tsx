import logo from './chat.png';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [color, setColor] = useState(localStorage.getItem('color') || '');

  useEffect(() => {
    window.addEventListener('message', (e: MessageEvent)=>{
      setColor(e.data.color);
    });
  })

  return (
    <div className="App">
      <div className="chat-icon" style={{ backgroundColor: color }}>
        <img src={logo} className="chat-icon-image" alt="logo" />
      </div>
    </div>
  );
}

export default App;
