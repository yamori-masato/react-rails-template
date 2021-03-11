import { newAxiosInstance } from './base'

const usersURL = `${process.env.REACT_APP_API_HOST}/api/v1/users`
const instance = newAxiosInstance({baseURL: usersURL})

export const fetchUsers = async () => (
  instance.get('')
)