import { useEffect, useState, Fragment } from 'react'
import { Person } from './components/Person'
function App() {
  const initialPersons = [
    { id: 1, name: 'Cilsy' },
    { id: 2, name: 'Fullstack' }
  ]
  
  const [persons, setPersons] = useState(initialPersons)

  useEffect(() => {
    console.log('akan dijalankan ketika komponen berhasil di render')
  }, [])

  useEffect(() => {
    console.log(
      'akan dijalankan ketika komponen berhasil di re-render karena perubahan state persons'
    )
  }, [persons])

  useEffect(() => {
    return () => {
      console.log(
        'akan dijalankan ketika komponen mengalami unmounting'
      )
    }
  }, [])

  return (
    <Fragment>
      {
        persons.map(person => (
          <Person key={person.id} person={person} />
        ))
      }    
    </Fragment>
  );
}

export default App;
