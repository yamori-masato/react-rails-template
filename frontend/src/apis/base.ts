import axios, { AxiosRequestConfig } from 'axios'

const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }
}

export const newAxiosInstance = (options: AxiosRequestConfig = {}) => {
  const instance = axios.create({...API_CONFIG, ...options})

  instance.interceptors.response.use(
    response => {
      if (process.env.NODE_ENV === 'development') {
        console.log('[DEBUG]', response)
      }
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )

  return instance
}