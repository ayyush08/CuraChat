import React, { useState } from 'react'
import { Avatar, Button, Stack, Container, IconButton, Paper, TextField, Typography } from '@mui/material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { usernameValidator } from '../utils/validators'

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)
  const toggleLogin = () => setIsLogin(!isLogin)

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");


  const handleLogin = (e) => {
    e.preventDefault();
  }
  const handleSignUp = (e) => {
    e.preventDefault();
  }

  return (
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
        {isLogin ?
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{
              width: '100%',
              marginTop: '1rem',
            }}
            onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
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
                value={username.value}
                onChange={username.changeHandler}
              />
              {
                username.error && (
                  <Typography color='error' variant='caption'>{username.error}</Typography>
                )
              }
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
                value={password.value}
                onChange={password.changeHandler}
              />
              {
                password.error && (
                  <Typography color='error' variant='caption'>{password.error}</Typography>
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
              <Typography textAlign={"center"} m={"1rem"} fontFamily={'cursive'} >OR</Typography>
              <Button
                variant='text'
                fullWidth
                sx={{
                  '&:hover': {
                    backgroundColor: '#ffe0b3',
                    color: 'black',
                  },
                  color: '#FFA500',
                  fontFamily: 'cursive',
                }}
                onClick={toggleLogin}
              >
                Sign Up Instead
              </Button>
            </form>
          </>

          :
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form style={{
              width: '100%',
              marginTop: '1rem',
            }}
            onSubmit={handleSignUp}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar sx={{
                  width: "10rem",
                  height: "10rem",
                  objectFit: "contain",
                }}
                  src={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#FFA500",
                    '&:hover': {
                      backgroundColor: "#E59400",
                    },
                    '&:active': {
                      backgroundColor: "#FFA500",
                    },
                    "&:focus": {
                      backgroundColor: "#FFA500",
                    },
                    color: "white",
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
              {
                avatar.error && (
                  <Typography color='error'
                    m={"1rem auto"}
                    display={"block"}
                    width={"fit-content"}

                    variant='caption'>{avatar.error}</Typography>
                )
              }
              <TextField
                required
                fullWidth
                label="Name"
                margin='normal'
                variant='outlined'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'orange',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: 'orange',
                    }
                  }
                }}
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin='normal'
                variant='outlined'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'orange',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: 'orange',
                    }
                  }
                }}
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin='normal'
                variant='outlined'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'orange',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: 'orange',
                    }
                  }
                }}
                value={username.value}
                onChange={username.changeHandler}
              />
              {
                username.error && (
                  <Typography color='error' variant='caption'>{username.error}</Typography>
                )
              }
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
                      borderColor: 'orange',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: 'orange',
                    }
                  }
                }}
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button variant='contained' fullWidth type="submit" color='primary' sx={{
                marginTop: "1rem",
                backgroundColor: "#FFA500",
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
              }}>Sign Up</Button>
              <Typography textAlign={"center"} m={"1rem"} fontFamily={'cursive'} >OR</Typography>
              <Button
                variant='text'
                fullWidth
                sx={{
                  '&:hover': {
                    backgroundColor: '#ffe0b3',
                    color: 'black',
                  },
                  color: '#FFA500',
                  fontFamily: 'cursive',
                }}
                onClick={toggleLogin}
              >
                Log In Instead
              </Button>
            </form>
          </>
        }
      </Paper>
    </Container>
  )
}

export default Login
