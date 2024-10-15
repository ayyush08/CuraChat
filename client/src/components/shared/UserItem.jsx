import React,{memo} from 'react'
import { Add as AddIcon } from '@mui/icons-material'
import { ListItem,Stack, Avatar, Typography, IconButton } from '@mui/material'
const UserItem = ({ user, handler, handlerIsLoading }) => {
    const { name, _id, avatar } = user
    return (
        <ListItem>
            <Stack 
            direction={'row'} 
            alignItems={'center'}
            spacing={'1rem'}
            width={'100%'}
            >
                <Avatar/>
                <Typography
                variant='body1'
                sx={{
                    flexGrow: 1,
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                >{name}</Typography>
                <IconButton
                size='small'
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover':{
                        bgcolor: 'primary.dark'
                    }
                }}
                onClick={()=>handler(_id)} disabled={handlerIsLoading} >
                    <AddIcon/>
                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default memo(UserItem)