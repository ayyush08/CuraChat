import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from '@mui/material'
import React,{useState} from 'react'
import { Search as SearchIcon } from '@mui/icons-material'
import { useInputValidation } from '6pp'
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sampleData';




const Search = () => {
  const search = useInputValidation('')
  const [users, setUsers] = useState(sampleUsers)
  const addFriendHandler = (id) => {
    console.log('Add Friend', id)
  }
  let isLoadingSendFriendRequest = false

  return (
    <Dialog open >
      <Stack p={"2rem"} direction={'column'} width={'25rem'}
      >
        <DialogTitle textAlign={'center'}>Find People</DialogTitle>
        <TextField
          label=''
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <List>
          {
            users.map((user) => (
              <UserItem user={user} key={user._id} handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            ))
          }
        </List>

      </Stack>

    </Dialog>
  )
}

export default Search