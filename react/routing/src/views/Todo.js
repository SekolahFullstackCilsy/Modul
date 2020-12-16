import useRouter from "use-react-router"                    

const Todo = () => {
  const { match } = useRouter()

  return (
    <div>
      Todo dengan id {match.params.id}
    </div>
  )
}

export { Todo }