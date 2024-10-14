import React from 'react'
import moment from 'moment'
import { Avatar, Stack, Typography } from '@mui/material'
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material'
const Profile = () => {
    return (
        <Stack spacing={'2rem'} direction={'column'} alignItems={'center'} >
            <Avatar
                sx={{
                    width: 200,
                    height: 200,
                    objectFit: 'contain',
                    marginBottom: '1rem',
                    border: '5px solid white'
                }} />
            <ProfileCard heading={"Bio"}
                text={"loremandknak"} />
            <ProfileCard heading={"Username"}
                text={"ayyush23"}
                Icon={<UserNameIcon />} />
            <ProfileCard heading={"Name"}
                text={"Ayush Kumar Gupta"}
                Icon={<FaceIcon />} />
            <ProfileCard heading={"Joined"}
                text={moment(new Date('2021-09-01').toISOString()).fromNow()}
                Icon={<CalendarIcon />} />
        </Stack>
    )
}

const ProfileCard = ({ text, Icon, heading }) => (
    <Stack
        direction={'row'}
        alignItems={'center'}
        spacing={'1rem'}
        color={'white'}
        textAlign={'center'}
    >
        {
            Icon && Icon
        }
        <Stack>
            <Typography variant='body1'> {text} </Typography>
            <Typography variant='caption' color='gray' > {text} </Typography>
        </Stack>
    </Stack>
)

export default Profile