import { Close as CloseIcon, Dashboard as DashboardIcon, ExitToApp as ExitToAppIcon, Groups as GroupsIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Message as MessageIcon } from '@mui/icons-material'
import { Box, Drawer, Grid, IconButton, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link as LinkComponent, useLocation } from 'react-router-dom'
import { grayColor, orange } from '../../constants/color'

const Link = styled(LinkComponent)`
    text-decoration: none;
    border-radius: 2rem;
    padding: 0.5rem ;
    color: black;
    &:hover {
        background: ${orange};
        color: white;
    }
    transition: all 0.2s;
    `


export const adminTabs = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: <DashboardIcon/>
    },
    {
        name: 'Users',
        path: '/admin/user-management',
        icon: <ManageAccountsIcon/>
    },
    {
        name: 'Chats',
        path: '/admin/chats-management',
        icon: <GroupsIcon/>
    },
    {
        name: 'Messages',
        path: '/admin/messages',
        icon: <MessageIcon/>
    },
    
]
const Siderbar = ({ w = '100%' }) => {
    const location = useLocation();

    const logoutHandler = () => {
        console.log('logout')
    }

    return (
        <Stack width={w} direction={'column'} p={'3rem'} spacing={'3rem'}
        >
            <Typography variant='h5'>
                CuraChat
            </Typography>

            <Stack direction={'column'} spacing={'1rem'}>
            {
                adminTabs.map((tab, index) => (
                    <Link key={tab.path} to={tab.path}
                    sx={
                        location.pathname===tab.path && {
                            background: orange,
                            color: 'white',
                        }
                    }
                    >
                        <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}
                        p={'1rem'}
                        >
                            {tab.icon}
                            <Typography variant='body1'>{tab.name}</Typography>
                        </Stack>
                    </Link>
                ))
            }
            <Link 
                    onClick={logoutHandler}
                    >
                        <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}
                        p={'1rem'}
                        >
                            <ExitToAppIcon/>
                            <Typography variant='body1'>Logout</Typography>
                        </Stack>
                    </Link>
            </Stack>
        </Stack>
    )
}



const AdminLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false)

    const handleMobile = () => {
        setIsMobile(!isMobile)
    }

    const handleClose = () => {
        setIsMobile(false)
    }

    return (
        <Grid container
            minHeight={'100vh'}
        >
            <Box
                sx={{
                    display: { xs: 'block', md: 'none' },
                    position: 'fixed',
                    right: '1rem',
                    top: '1rem',
                }}
            >
                <IconButton onClick={handleMobile}>
                    {
                        !isMobile ? <MenuIcon /> : <CloseIcon />
                    }
                </IconButton>
            </Box>
            <Grid item
                md={4}
                lg={3}
                sx={{
                    display: { xs: 'none', md: 'block' },
                }}>
                <Siderbar />
            </Grid>
            <Grid item
                xs={12}
                md={8}
                lg={9}
                sx={{
                    bgcolor: grayColor,
                }}>
                {children}
            </Grid>
            <Drawer open={isMobile} onClose={handleClose}>
                <Siderbar w='50vw' />
            </Drawer>

        </Grid>
    )
}

export default AdminLayout