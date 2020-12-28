import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useRouter from 'use-react-router'
import { Layout } from '../../components/Layout'

const RegisterPage = () => {
  const { history } = useRouter()

  const [registerData, setRegisterData] = useState({
    username: '',
    password: ''
  })

  const onChangeField = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users'))

    if (!users || users.length === 0) {
      localStorage.setItem(
        'users', JSON.stringify([registerData])
      )
    } else {
      localStorage.setItem(
        'users', JSON.stringify([...users, registerData])
      )
    }
    history.push('/login')
  }
  
  return (
    <Layout>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            name="username" 
            value={registerData.username} 
            onChange={onChangeField} 
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            name="password" 
            value={registerData.password} 
            onChange={onChangeField} 
          />
        </Form.Group>
        
        <Button 
          className="mt-5" 
          type="submit" 
          block
        >
          Register
        </Button>
      </Form>
    </Layout>
  )
}

export { RegisterPage }                          