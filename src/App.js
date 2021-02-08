
import React from 'react';
import { IdCard } from './components/IdCard/IdCard';
import { Greetings } from './components/Greetings/Greetings';
import { Random } from './components/Random/Random';
import { BoxColor } from './components/BoxColor/BoxColor';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>iteracion 1</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
       <h2>iteracion 2</h2>
      <Greetings lang={"es"}>
        Tomás
      </Greetings>
      <h2>iteracion 3</h2>
      <Random Min={0} max={500}/>
      <h2>iteracion 4</h2>
      <BoxColor
        r={50} g={20} b={60}>
          
      </BoxColor>
    </div>
  );
}

export default App;
