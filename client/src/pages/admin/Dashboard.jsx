import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Container, Paper, Stack, Typography,Box } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Notifications as NotificationsIcon, Search as SearchIcon,Person as PersonIcon, Message as MessageIcon } from '@mui/icons-material'
import moment from 'moment'
import { CurvedButton, SearchField } from '../../components/styles/StyledComponents'
import { orange } from '../../constants/color'
import { DoughnutChart, LineChart } from '../../components/specific/Charts'
import zIndex from '@mui/material/styles/zIndex'
const Dashboard = () => {

    const Appbar = (<Paper elevation={3}
    sx={{
        padding: '1rem', margin:'2rem 0', borderRadius: '1rem'
    }}
    >
        <Stack direction={'row'} alignItems={'center'} spacing={'1rem'}>
            <AdminPanelSettingsIcon sx={{
                fontSize: '3rem',
                color: orange
            }} />
            <SearchField placeholder={'Search'} />
            <CurvedButton>
                <SearchIcon/>
            </CurvedButton>
            <Box flexGrow={1} />
            <Typography
            display={{
                xs: 'none',
                lg: 'block'
            }}
            color={'rgba(0,0,0,0.5)'}
            textAlign={'center'}
            >
                {
                    moment().format('dddd, D MMMM YYYY')
                }
            </Typography>
            <NotificationsIcon
            sx={{
                color: orange
            }}
            />
        </Stack>
    </Paper>);


    const Widgets = <Stack direction={{
        xs: 'column',
        lg: 'row'
    }}
    spacing={'2rem'}
    justifyContent={'space-between'}
    alignItems={'center'}
    margin={'2rem 0'}
    >
        <Widget title={'Total Users'} value={100} Icon={<PersonIcon/>}/>
        <Widget title={'Total Messages'} value={100} Icon={<MessageIcon/>}/>
        <Widget title={'Total Chats'} value={100} Icon={<GroupIcon/>}/>
    </Stack>

    return (
        <AdminLayout>
            <Container component={'main'} >
                {
                    Appbar
                }
                <Stack
                direction={{
                    xs: 'column',
                    lg: 'row'
                }}
                spacing={'2rem'}
                flexWrap={'wrap'}
                justifyContent={'center'}
                alignItems={{
                    xs: 'center',
                    lg: 'stretch'
                }}
                >
                <Paper
                elevation={3}
                sx={{
                    padding: '2rem 3.5rem',
                    borderRadius: '1rem',
                    width: '100%',
                    maxWidth: '40rem',
                }}
                >
                    <Typography variant={'h4'}
                    margin={'1rem 0'}
                    >Last Messages</Typography>
                    <LineChart value={[23,43,54,67]}/>
                </Paper>

                <Paper 
                elevation={3}
                sx={{
                    padding: '1rem',
                    borderRadius: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:{xs: '100%', sm: '50%'},
                    position: 'relative',
                    width: '100%',
                    maxWidth: '25rem',
                }}
                >
                    <DoughnutChart
                    
                    labels={
                        ["Single Chats", "Group Chats"]
                    } value={[23,66]
                    }/>
                <Stack
                position={'absolute'}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={'0.5rem'}
                width={'100%'}
                height={'100%'}
                >
                <GroupIcon/> <Typography> Vs</Typography>
                <PersonIcon/>

                </Stack>

                </Paper>

                </Stack>

                {
                    Widgets
                }
            </Container>
        </AdminLayout>
    )
}


const Widget = ({title,value,Icon})=> <Paper
elevation={5}   
sx={{
    padding: '2rem',
    margin: '2rem 0',
    borderRadius: '1.5rem',
    width: '20rem',
}}
>
    <Stack
    alignItems={'center'}
    spacing={'1rem'}
    >
        <Typography
        sx={{
            color: orange,
            borderRadius:'50%',
            border: `5px solid ${orange}`,
            width: '5rem',
            height: '5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'semibold',
        }}

        >{value}</Typography>
        <Stack
        direction={'row'}
        spacing={'1rem'}
        alignContent={'center'}
        sx={{
            color: orange,
        }}
        >
            {Icon}
        </Stack>
        <Typography>{title}</Typography>
    </Stack>
</Paper>



export default Dashboard