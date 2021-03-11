import { newAxiosInstance } from './base'

type LoginParams = {
  email: string
  password: string
}

type SigninParams = {
  name: string
  email: string
  password: string
}

const instance = newAxiosInstance()

export const login = async (params: LoginParams) => (
  instance.post('login', {
    email: params.email,
    password: params.password,
  })
)

export const signin = async (params: SigninParams) => (
  instance.post('signin', {
    name: params.name,
    email: params.email,
    password: params.password,
  })
)

export const logout = async () => (
  instance.delete('logout')
)