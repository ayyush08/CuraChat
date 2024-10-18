import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { grayColor, orange } from '../constants/color'
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material'
import { InputBox } from '../components/styles/StyledComponents'
import FileMenu from '../components/dialogs/FileMenu'
import { sampleMessages } from '../constants/sampleData'
import MessageComponent from '../components/shared/MessageComponent'

const user = {
  _id: '1',
  name: 'Random User',
}

const Chat = () => {
  const containerRef = useRef(null)
  // const fileMenuRef = useRef(null)
  return (
    <>
      <Stack ref={containerRef} 
      boxSizing={'border-box'}
      padding={'1rem'}
      spacing={'1rem'}
      bgcolor={'#ffe0b25e'}
      height={'90%'}
      sx={{
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
      >
        {/* Messages Render */}
        {
          sampleMessages.map((message,i)=>(
            <MessageComponent key={i} message={message} user={user} />
          ))
        }
      </Stack>
      <form  style={{
        height: '10%',
      }}
      >
        <Stack 
        direction={'row'} 
        height={'100%'}
        padding={'1rem'}
        alignItems={'center'}
        position={'relative'}
        bgcolor={'#ffe0b25e'}
        >
          <IconButton
          sx={{
            position: 'absolute',
            left: '1.5rem',
            rotate: '30deg'
          }}
          // ref={fileMenuRef}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder='Type message here....' />

          <IconButton
          type='submit'
          sx={{
            bgcolor: orange,
            alignItems: 'center',
            color: 'white',
            padding: '0.5rem',

            marginLeft: '1rem',
            '&:hover': {
              bgcolor: '#e9680e'
            }
          }}
          >
            <SendIcon/>
          </IconButton>
        </Stack>

      </form>
      <FileMenu anchorEl={null} />
    </>
  )
}

export default AppLayout()(Chat)
