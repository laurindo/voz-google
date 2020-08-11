import React, { useEffect, useState } from 'react';
import './App.css';
import voiceImage from './voice.png'

function App() {
  const [base64string, setBase64] = useState("");
  const [text, setText] = useState("");

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/create?text=hello").then(resp => {
  //     resp.json().then(data => {
  //       setBase64("data:audio/mp3;base64," + data.text.replace(/\s/g, '').trim())
  //     });
  //   });
  // }, []);

  const generate = () => {
    fetch(`http://127.0.0.1:5000/create?text=${text}`).then(resp => {
      resp.json().then(data => {
        setBase64("data:audio/mp3;base64," + data.text.replace(/\s/g, '').trim())
      });
    });
  };

  return (
    <div className="App">
      <img src={voiceImage} alt="voz do google" className="voice-image"/>
      <h3>Voz do Google</h3>
      <input placeholder="Digite alguma texto" value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={generate}>Gerar Áudio</button>
      {base64string ? (
        <div>
          <audio controls>
            <source src={base64string} type="audio/mpeg"/>
          </audio>
          <div className="download">
            <a href={base64string} target="_blank" download>
              Click to download
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
