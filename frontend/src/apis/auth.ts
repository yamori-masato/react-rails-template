import { newAxiosInstance } from './base'

export type LoginParams = {
  email: string
  password: string
}

type LoginResponse = schema.User

export type SignupParams = {
  name: string
  email: string
  password: string
}

type SignupResponse = schema.User

const instance = newAxiosInstance()

export const login = async (params: LoginParams) => (
  instance.post<LoginResponse>('login', {
    email: params.email,
    password: params.password,
  })
)

export const signup = async (params: SignupParams) => (
  instance.post<SignupResponse>('signin', {
    name: params.name,
    email: params.email,
    password: params.password,
  })
)

export const logout = async () => (
  instance.delete('logout')
)

export const fetchCurrentUser = async () => (
  instance.get('')
)