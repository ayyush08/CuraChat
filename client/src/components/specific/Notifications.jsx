import { Button, Dialog, DialogTitle, Avatar, ListItem, Stack, TextField, Typography } from '@mui/material'
import React, { memo } from 'react'
import { sampleNotifications } from '../../constants/sampleData'

const Notifications = () => {
  const friendRequesthandler = ({_id,accept})=>{
    console.log('Friend Request',_id,accept);
    
  }
  return (
    <Dialog open>
      <Stack p={{xs: '1rem', sm: '2rem'}} >
        <DialogTitle>Notifications</DialogTitle>
        {
          sampleNotifications.length > 0 ? (
            sampleNotifications.map((notification) => <NotificationItem key={notification._id} notification={notification} handler={friendRequesthandler} />)
          ): (<Typography textAlign={'center'} >No Notifications</Typography>)
        }
      </Stack>
    </Dialog>
  )
}




const NotificationItem = memo(({ notification,handler }) => {
  const {name,avatar} = notification.sender
  const _id = notification._id
  
  return (
    <ListItem>
        <Stack 
        direction={'row'} 
        alignItems={'center'}
        spacing={'1rem'}
        width={'100%'}

        >
            <Avatar src={avatar} />
            <Typography
            variant='body1'
            sx={{
                flexGrow: 1,
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%'
            }}
            >{`${name} sent you a friend request `}</Typography>
          <Stack
          direction={{
            xs: 'column',
            sm: 'row'
          }}
          >
            <Button onClick={()=>handler({_id,accept:true})} >Accept</Button>
            <Button color='error' onClick={()=>handler({_id,accept:false})} >Reject</Button>
          </Stack>
        </Stack>
    </ListItem>
)
})

export default Notifications
