import React, { useState } from 'react';
import './App.css';
import run from './App.test';

function App() {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [css, setCss] = useState('');

  const onSearchData = async () => {
    try {
      const result = await run(name);
      setCss('none');
      console.log(result);
      setData([...data,result]);
      setName("")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="main">
      <div className="leftside-negigations">Gemini</div>
      <div className="rightside-main-div">
        <div className="header">
          <div className="title">Gemini</div>
          <div className="user-icon">
            <img src="https://clone-gemini.vercel.app/assets/user_icon-BYrw3k3X.png" alt="user icon" />
          </div>
        </div>
        <div className='data'>

        {data && data.map((item, index) => (
          <div className='dataitem' key={index}>
            <p>  {item}</p>
          </div>
        ))}
        </div>
        <div className={css}>
          <div className="headings">
            <h1>Hello, Harsh</h1>
            <h1>How can I help you today?</h1>
          </div>
          <div className="prompt-options">
            <div className="prompt-option">Brainstorm team bonding activities for our work retreat</div>
            <div className="prompt-option">Write a thank you note to my colleague</div>
            <div className="prompt-option">Help me understand American football</div>
            <div className="prompt-option">Suggest an organized list of the best food spots in a city</div>
          </div>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a prompt here"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button onClick={onSearchData}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;