const Person = ({ person }) => {
  return (
    <div key={person.id}>
      <p>My name is {person.name}</p>                   
    </div>
  )
}

export { Person }