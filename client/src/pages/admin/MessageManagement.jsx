import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { dashboardData } from '../../constants/sampleData'
import {fileFormat, transformImage} from '../../lib/features'
import { Avatar,Box,Stack } from '@mui/material'
import RenderAttachment from '../../components/shared/RenderAttachment'
import moment from 'moment'
const columns = [{
    field: 'id',
    headerName: 'ID',
    headerClassName: 'table-header',
    width: 200,
}, {
    field: 'attachments',
    headerName: 'Attachments',
    headerClassName: 'table-header',
    width: 200,
    renderCell: (params) => {
        const {attachments} = params.row;
        return attachments?.length > 0 ? attachments.map((i)=>{
            const url = i.url;
            const file = fileFormat(url);
            
                console.log(file,url);
            return( <Box key={i}>
                <a href={url}
                download
                style={{
                    color: 'black',
                }}
                target='_blank'
                
                >
                    {
                        
                        RenderAttachment({file,url})
                    }
                </a>
            </Box>)
        }) : 'No Attachments'
    }
},
{
    field: 'content',
    headerName: 'Content',
    headerClassName: 'table-header',
    width: 400,
},
{
    field: 'sender',
    headerName: 'Sent By',
    headerClassName: 'table-header',
    width: 200,
    renderCell: (params) => (        
        <Stack direction={'row'} spacing={'1rem'} alignItems={
            'center'
        } >
            <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
            <span>{params.row.sender.name}</span>
        </Stack>
    )
    // renderCell: (params) => {
    //     console.log(params.row.sender);
        
    // }
},
{
    field: 'chat',
    headerName: 'Chat',
    headerClassName: 'table-header',
    width: 220,

},
{
    field: 'groupChat',
    headerName: 'Group Chat',
    headerClassName: 'table-header',
    width: 100,

},
{
    field: 'createdAt',
    headerName: 'Created At',
    headerClassName: 'table-header',
    width: 200,
}, {
    field: 'updatedAt',
    headerName: 'Updated At',
    headerClassName: 'table-header',
    width: 200,
}
]
const MessageManagement = () => {
    const [rows, setRows] = useState([])

    useEffect(()=>{
        setRows(dashboardData.messages.map((message)=>({
            ...message,
            id: message._id,
            
            sender:{
                name: message.sender.name,
                avatar: transformImage(message.sender.avatar,50)
            },
            createdAt: moment(message.createdAt).format('YYYY-MM-DD HH:mm:ss'),
        })))
    },[])

    return (
        <AdminLayout>
            <Table
            rowHeight={200}
            heading={"All Messages"} columns={columns} rows={rows}/>
        </AdminLayout>
    )
}

export default MessageManagement

