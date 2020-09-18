import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  //personState gives you access to the object . repace thisstate with person state.
  const [ personsState, setPersonsState ] = useState({
      persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    //console.log('was clicked');
    //DONT DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        {name: newName, age: 34},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26}
      ],
      //otherState: personState.otherState - not elegant way to record old states
    });
  }

  return (
    <div className="App">
      <h1> Hi, Im a  react app </h1>
      <p> This really works </p>
      <button onClick={() => switchNameHandler('James')}>Switch Name</button>
      {/* //onClick switchHandler without () as dont want it called straight away only after the click.  UPDATE: with the aarow function, can be inefficient */}
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}/>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Jamesssss')} > My Hobbies: Racing </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Does this work now?'));
}


export default app;
