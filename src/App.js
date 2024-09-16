import React, { useState } from 'react';
import './App.css'; // اطمینان حاصل کنید که مسیر فایل CSS درست باشد
import data from './data.json';
import { SocialIcon } from 'react-social-icons';
import logo from './logo.png';
import Fullpage from './Fullpage'; // اطمینان حاصل کنید که مسیر فایل Fullpage درست باشد

function App() {
  const [bgColor, setBgColor] = useState('"#012f60"'); // Default color set to red

  const toggleColor = () => {
    setBgColor(prevColor => (prevColor === "#012f60" ? '#8cfffb' : "#012f60"));
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <button 
        style={{ position: 'absolute', top: '10px', left: '10px' }} 
        onClick={toggleColor}
      >
        change color 
      </button>
      <div className='navigation'></div>
      <Fullpage>
        <div className='fullpage'>
          <img src={logo} alt="Logo" />

          <h1 className='title'>{data.title}</h1>
          <h2 className='subtitle'>{data.subtitle}</h2>
          <div className='logo'>
            {
              Object.keys(data.links).map(key => {
                return (
                  <SocialIcon url={data.links[key]} key={key} />
                );
              })
            }
          </div>
          <div className='fullpage'>
            <div className='fullpage2'>
              <h1 className='about'>{data.Detail[0].about}</h1>
              <p className='details'>{data.Detail[1].details}</p>
            </div>
          </div>
          <div className='fullpage'>
            <ul className='first'>
              <li className='python'>{data.skills[0].Python}</li>
              <li className='javascript'>{data.skills[1].javascript}</li>
              <li className='htmlcss'>{data.skills[2].htmlcss}</li>
            </ul>
            <ul className='second'>
              <li className='git'>{data.skills[3].git}</li>
              <li className='c'>{data.skills[4].c}</li>
              <li className='phil'>{data.skills[5].phil}</li>
            </ul>
          </div>
        </div>
      </Fullpage>
    </div>
  );
}

export default App;
