import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Button } from '@mui/material'
import React from 'react'

const UserProfile = () => {
  const handleLogout = () => {
    console.log("logout")
  }
  return (
    <div className='min-h-[80vh] flex justify-center items-center text-center'>
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{fontSize:"9rem"}}/>
        <h1 className="flex text-2xl font-semibold">Pavan Pabitwar</h1>
        <p>Email: pabiwarpavan@gamil.com</p>
        <Button variant='contained' onClick={handleLogout} sx={{margin:"2rem 0rem"}}>Logout</Button>
      </div>
    </div>
  )
}

export default UserProfile
