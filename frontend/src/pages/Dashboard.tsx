import React from 'react'
import { useAuth } from '../auth/AuthProvider'

const Dashboard = () => {
  const { currentUser } = useAuth()
  return currentUser ? (
    <>
      <h1>Dashboard</h1>
      <div>{`こんにちは！${currentUser.name}さん！`}</div>
    </>
  ) : (
    <div>no authenticate</div>
  )
}

export default Dashboard
