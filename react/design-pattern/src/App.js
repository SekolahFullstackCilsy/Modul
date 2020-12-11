import { useState } from 'react'
import { Person } from './components/Person'
function App() {
  const initialPersons = [
    { id: 1, name: 'Cilsy' },
    { id: 2, name: 'Fullstack' }
  ]
  
  const [persons, setPersons] = useState(initialPersons)

  return (
    <div>
      {
        persons.map(person => (
          <Person person={person} />                 
        ))
      }    
    </div>
  );
}

export default App;
