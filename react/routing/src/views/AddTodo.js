import useRouter from 'use-react-router'
import qs from 'query-string'

const AddTodo = () => {                            
  const { history, match, location } = useRouter()             

  console.log(qs.parse(location.search))
  console.log(qs.parse(location.hash))          

  const onNavigate = () => {
    history.push(`${match.url}/success`)
  }

  return (
    <div>
      Add Todo
      <button onClick={onNavigate}>Success</button>
    </div>
  )
}

export { AddTodo }