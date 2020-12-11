import { memo } from 'react'
import { withHeading } from '../../hoc/withHeading'

const Component = ({ person }) => {
  return (
    <div key={person.id}>
      <p>My name is {person.name}</p>                   
    </div>
  )
}

const Person = withHeading(memo(Component))

export { Person }