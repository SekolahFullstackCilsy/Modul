import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useRouter from 'use-react-router'
import { Layout } from '../../components/Layout'

const LoginPage = () => {
  const { history } = useRouter()

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const onChangeField = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users'))

    if (!users || users.length === 0) {
      alert('wrong credentials')
    } else {
      const index = users.findIndex(
        user => user.username === loginData.username && 
        user.password === loginData.password
      )
      
      if (index === -1) {
        alert('wrong credentials')
      } else {
        localStorage.setItem('isLogin', JSON.stringify(true))
        history.push('/')
      }
    }
  }
  
  return (
    <Layout>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            name="username" 
            value={loginData.username} 
            onChange={onChangeField} 
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            name="password" 
            value={loginData.password} 
            onChange={onChangeField} 
          />
        </Form.Group>
        
        <Button className="mt-5" type="submit" block>Login</Button>
      </Form>
    </Layout>
  )
}

export { LoginPage }                          