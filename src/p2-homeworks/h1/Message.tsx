import React from 'react'
import classes from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <img src={props.avatar} alt="user avatar"/>
            <div className={classes.message_body}>
                <p className={classes.name}>{props.name}</p>
                <div className={classes.bottom}>
                    <p className={classes.message_text}>{props.message}</p>
                    <div className={classes.time}>{props.time}</div>
                </div>

            </div>

        </div>
    )
}
export default Message;


