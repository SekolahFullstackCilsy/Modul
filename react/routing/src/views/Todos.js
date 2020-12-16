import { Link } from 'react-router-dom'
import useRouter from 'use-react-router'

const Todos = () => {           
  const { history } = useRouter()
  
  const onNavigate = () => {
    history.push('/add-todos?title=makan#title=makan')
  }

  return (
    <div>
      <p>Todos</p>

      <Link to={{
        pathname: '/add-todos',
        search: 'title=makan',
        hash: 'title=makan'
      }}>
        Navigasi ke AddTodo dengan Link               
      </Link>
      
      <br/>

      <button
        onClick={onNavigate}
      >
        Navigasi ke AddTodo dengan use react router
      </button>
    </div>
  )
}

export { Todos }