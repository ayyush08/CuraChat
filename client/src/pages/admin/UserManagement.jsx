import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { Avatar } from '@mui/material'
import { dashboardData } from '../../constants/sampleData'
import {transformImage} from '../../lib/features'

const columns = [{
    field: 'id',
    headerName: 'ID',
    headerClassName: 'table-header',
    width: 200,
},{
    field: 'avatar',
    headerName: 'Avatar',
    headerClassName: 'table-header',
    width: 150,
    renderCell:(params)=><Avatar alt={params.row.name} src={params.row.avatar} />
},{
    field: 'username',
    headerName: 'Username',
    headerClassName: 'table-header',
    width: 200,
},
{
    field: 'friends',
    headerName: 'Friends',
    headerClassName: 'table-header',
    width: 200,

},
{
    field: 'groups',
    headerName: 'Groups',
    headerClassName: 'table-header',
    width: 200,

},
{
    field: 'createdAt',
    headerName: 'Created At',
    headerClassName: 'table-header',
    width: 200,
},{
    field: 'updatedAt',
    headerName: 'Updated At',
    headerClassName: 'table-header',
    width: 200,
}
]

const UserManagement = () => {
    const [rows, setRows] = useState([])


    useEffect(()=>{
        setRows(dashboardData.users.map(user=>(
            {
                ...user, id:user. _id,
                avatar: transformImage(user.avatar,50)
            }
        )))
    })

    return (
        <AdminLayout>
            <Table
            heading={"All Users"}
            columns={columns}
            rows={rows}

            />
        </AdminLayout>
    )
}

export default UserManagement