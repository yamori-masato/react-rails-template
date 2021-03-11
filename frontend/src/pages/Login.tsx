import React, { FC, useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthProvider'
import { RouteComponentProps } from 'react-router-dom'

type State = {
  email: string
  password: string
  isButtonDisable: boolean
}

const Login: FC<RouteComponentProps> = ({history}) => {
  const { login } = useAuth()

  const [state, setState] = useState<State>({
    email: '',
    password: '',
    isButtonDisable: true,
  })

  useEffect(() => {
    // 厳密なバリデーションを入れたい
    const isButtonDisable = (
      !state.email.trim() ||
      !state.password.trim()
    )
    setState(state => ({...state, isButtonDisable}))
  }, [state.email, state.password])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = {
      email: state.email,
      password: state.password
    }
    login(params, history)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setState({
      ...state,
      email: e.target.value
    })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setState({
      ...state,
      password: e.target.value
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Email:
          <input name="email" type="email" placeholder="Email" value={state.email} onChange={handleEmailChange} />
        </label>
        <br/>
        <label>
          Password:
          <input name="password" type="password" placeholder="Password" value={state.password} onChange={handlePasswordChange} />
        </label>
        <br/>
        <button type="submit" disabled={state.isButtonDisable}>Log in</button>
      </form>
    </div>
  )
}

export default Login
