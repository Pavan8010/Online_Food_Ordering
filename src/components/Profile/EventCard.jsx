import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
// import MyLocationIcon from '@mui/icons-material/MyLocation'
import DeleteIcon from '@mui/icons-material/Delete'
const EventCard = () => {
  return (
    <Card sx={{width:345}}>
      <CardMedia
        sx={{height:345}}
        image='https://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg'
      />
      <CardContent>
          <Typography variant='h5'>
              Indian Fast Food
          </Typography>
          <Typography variant='body2'>
              50% off on your first order
          </Typography>
          <div className="py-2 space-y-2">
            {/* <div className='flex gap-3'> */}
                {/* <MyLocationIcon/> */}
                <p>{"Nanded"}</p>
            {/* </div> */}
            <p className='text-sm text-blue-500'>March 14, 2024 12:00 Am</p>
            <p className='text-sm text-red-500'>March 15, 2024 12:00 Am</p>
          </div>
      </CardContent>
    {/* only visible to admin */}
      {true && <CardActions>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
      </CardActions>}

    </Card>
  )
}

export default EventCard
