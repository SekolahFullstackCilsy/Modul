import React, { useState } from 'react';
import Greeting from './Greeting';
import Heading from './Heading';
import Button from './Button';

const App = () => {
  const initialState = [
    {name: 'Michael', age: 19},
    {name: 'Budi', age: 21},
    {name: 'Anne', age: 22}
  ]

  const initialPerson = {
    name: '',
    age: ''
  }
  
  const [persons, setPersons] = useState(initialState)
  const [person, setPerson] = useState(initialPerson)              

  const showMessage = () => {
    alert('Hello World')
  }

  const onChangePersons = () => {
    setPersons([
      {name: 'Kesya', age: 21},
      {name: 'Adi', age: 19},
      {name: 'Silvy', age: 22}
    ])
  }

  const onChangeInput = (e) => {
    setPerson({
      ...person, 
      [e.target.name]: e.target.value                      
    })
  }

  const addPerson = () => {
    setPersons([
      ...persons,
      person
    ])
    setPerson(initialPerson)                            
  }

  return (
    <div>
      <Heading>Greeting from React App</Heading>
      {
        persons.map(person => (
          <Greeting key={person.name} name={person.name} age={person.age} />
        ))
      }
      <button onClick={showMessage}>Show Message</button>
      <Button onChangePersons={onChangePersons} />

      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            onChange={onChangeInput}
            value={person.name}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input 
            type="number" 
            name="age" 
            id="age" 
            onChange={onChangeInput}                                  
            value={person.age}
          />
        </div>
      </div>

      <button onClick={addPerson}>Add Person</button>
    </div>
  );
}
 
export default App;
