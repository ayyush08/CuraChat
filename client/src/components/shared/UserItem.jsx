import React,{memo} from 'react'
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'
import { ListItem,Stack, Avatar, Typography, IconButton } from '@mui/material'
const UserItem = ({ user, handler, handlerIsLoading,isAdded=false,styling={} }) => {
    const { name, _id, avatar } = user
    return (
        <ListItem>
            <Stack 
            direction={'row'} 
            alignItems={'center'}
            spacing={'1rem'}
            width={'100%'}
            {...styling}
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
                    bgcolor: !isAdded ? 'primary.main': 'error.main',
                    color: 'white',
                    '&:hover':{
                        bgcolor: !isAdded ? 'primary.dark' : 'error.dark'
                    }
                }}
                onClick={()=>handler(_id)} disabled={handlerIsLoading} >
                    {
                        !isAdded ? <AddIcon /> : <RemoveIcon />
                    }

                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default memo(UserItem)