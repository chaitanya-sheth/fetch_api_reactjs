import { React, useState } from 'react';

import './App.css';
import Card from './card';
import Loader from './loader';
import MainScreen from './MainScreen';


function App() {

  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {

    document.querySelector('.mainScreenData').style.display = 'none';
    document.querySelector('.myData').style.display = 'flex';

    setLoading(true);
    let res = await fetch("https://reqres.in/api/users?page=1");
    let responseData = await res.json();
    setTimeout(() => {
      setResData(responseData.data);
      setLoading(false);
    }, 3000);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Grow More</h1>
        <button onClick={getData}>Get Users</button>
      </header>

      {/* starting screen */}
      <div className="mainScreenData">
        {loading ? Loader() : MainScreen()}
      </div>

      {/* screen rendering after fethching data */}
      <div className="myData">
        {loading ? Loader() : Card(resData)}
      </div>
    </div>
  );
}

export default App;
