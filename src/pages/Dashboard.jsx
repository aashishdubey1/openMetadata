import React from 'react'
import useAuthStore from '../features/auth/store/authStore'

const Dashboard = () => {

  const user = useAuthStore(state=>state)
  console.log(user)

  return (
    <div>
      <h1 className='text-4xl'>Dashboard</h1>
      <h2 className='text-2xl'>Hello {user.user.name}</h2>
    </div>

  )
}

export default Dashboard