import React, { useState } from 'react'
import { Avatar, Button, Stack, Container, IconButton, Paper, TextField, Typography } from '@mui/material'
import { useInputValidation } from '6pp'
import { Navigate } from 'react-router-dom'

const isAdmin = true


const AdminLogin = () => {
    const secretKey = useInputValidation("");
  const [password, setPassword] = useState()

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('submit')
  }

  if(isAdmin){
    return <Navigate to='/admin/dashboard'/>
  }

  return (
    <div style={
      {
        backgroundImage: "linear-gradient(#47474600, #e86f04bd)"
      }
    }>
      <Container component={"main"} maxWidth="xs"
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
              <Typography variant="h5">Admin Login</Typography>
              <form style={{
                width: '100%',
                marginTop: '1rem',
              }}
                onSubmit={submitHandler}
              >
                
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type='password'
                  margin='normal'
                  variant='outlined'
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: 'orange', // Change the outline color to orange
                      },
                    },
                    '& .MuiInputLabel-root': {
                      '&.Mui-focused': {
                        color: 'orange',
                      }
                    }
                  }}
                  value={secretKey.value}
                  onChange={secretKey.changeHandler}
                />
                {
                  secretKey.error && (
                    <Typography color='error' variant='caption'>{secretKey.error}</Typography>
                  )
                }
                <Button variant='contained' fullWidth type="submit" color='primary' sx={{
                  marginTop: "1rem",
                  backgroundColor: "#FFA500", // Change to orange
                  '&:hover': {
                    backgroundColor: "#E59400",
                  },
                  '&:active': {
                    backgroundColor: "#FFA500",
                  },
                  "&:focus": {
                    backgroundColor: "#FFA500",
                  },
                  fontFamily: 'cursive',
                }}>Login</Button>
              
              </form>
        </Paper>
      </Container>
    </div>
  )
}

export default AdminLogin