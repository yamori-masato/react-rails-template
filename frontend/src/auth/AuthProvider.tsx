import React, { FC, useContext, useState, useEffect } from 'react'
import { History } from 'history'
import {
  login as loginApi,
  logout as logoutApi,
  signup as signupApi,
  LoginParams,
  SignupParams,
  fetchCurrentUser,
} from '../apis/auth'

type AuthContextType = {
  signup: (params: SignupParams, history: History) => Promise<void>,
  login: (params: LoginParams, history: History) => Promise<void>,
  logout: () => Promise<void>,
  currentUser: schema.User | undefined,
  authCheck: boolean
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType)

export const useAuth = () => useContext(AuthContext)


const AuthProvider: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<schema.User | undefined>(undefined)
  const [authCheck, setAuthCheck] = useState<boolean>(false)
 
  const login: AuthContextType['login'] = async (params, history) => {
    loginApi(params)
      .then(res => {
        setCurrentUser(res.data)
        history.push('/dashboard')
      })
      .catch(error => {
        // emailまたはpasswordが間違っていますのsetState
      })
  }

  const signup: AuthContextType['signup'] = async (params, history) => {
    signupApi(params)
      .then(res => {
        setCurrentUser(res.data)
        history.push('/dashboard')
      })
      .catch(error => {
        // emailまたはpasswordが間違っていますのsetState
      })
  }

  const logout: AuthContextType['logout'] = async () => {
    logoutApi()
      .then(() => {
        setCurrentUser(undefined)
      })
  }

  useEffect(() => {
    (async () => {
      await fetchCurrentUser()
        .then((res) => {
          setCurrentUser(res.data)
        })
        .catch((error) => {
          setCurrentUser(undefined)
        })
      setAuthCheck(true)
    })()
  }, [])

  return (
    <AuthContext.Provider
      value={{login, logout, signup, currentUser, authCheck}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
