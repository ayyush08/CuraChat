import React, { memo } from 'react'
import { grayColor, lightBlue, orange } from '../../constants/color';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { fileFormat } from '../../lib/features';
const MessageComponent = ({ message, user }) => {

    const { sender, content, attachments = [], createdAt } = message;
    console.log(message, user);
    const sameSender = sender?._id === user?._id;
    console.log(sameSender);
    const timeAgo = moment(createdAt).fromNow();
    return (
        <div
            style={{
                alignSelf: sameSender ? 'flex-end' : 'flex-start',
                backgroundColor: !sameSender ? 'white' : '#fb8f44',
                color: 'black',
                borderRadius: '5px',
                padding: '0.5rem',
                width: 'fit-content',

            }}
        >
            {
                !sameSender &&
                <Typography
                    color={lightBlue}
                    fontWeight={'600'}
                    variant='caption'
                    fontStyle={'italic'}
                >{sender.name}</Typography>
            }
            {
                content && <Typography>{content}</Typography>
            }

            {
                attachments.length > 0 && attachments.map((attachment, i) => {
                    const url = attachment.url;
                    const file = fileFormat(url);
                    return <Box key={i} >
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            download
                            style={{
                                color:'black'
                            }}
                            ></a>
                    </Box>
                })
            }
            <Typography variant='caption' color={'text.secondary'} >{timeAgo}</Typography>
        </div>
    )
}

export default memo(MessageComponent)