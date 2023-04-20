import React from "react";

import {Event} from "../services/eventService";
import {Badge} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

//mock messageList
const messageList: any[] = [{msg: "Don't forget ting bring some chips"}, {msg: "Don't be late"}, {msg: "Call Ryan 1 hour before the party"}];
    
export const Notification = (props: { events: Event[], setOpen: (val: boolean) => void, messages: any[]}) => {
    const eventList = props.events;
    let counter = 0;
    const newList: any[] = [];

    const isToday = (date: Date) => {
        const today = new Date();
        return date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
    }

    if(eventList){
        eventList.forEach(e => {
            let eventDate = new Date(e?.dateTime ? e?.dateTime.toString() : "");
            if(isToday(eventDate)){
                counter++;
            }
        });
    }

    const generateMessages = () => {
        if(eventList){
            for (let i = 0; i < counter && i < messageList.length; i++) {
                newList.push(messageList[i]);
                props.messages.push(messageList[i]);
            }
            props.setOpen(true);
        }
    }

    return (
        <><br/>
            {counter > 0 && 
            <Badge badgeContent={counter} color="secondary">
                <NotificationsIcon onClick={() => {generateMessages(); props.setOpen(true)}}/>
            </Badge>        
            }            
        </>
    )
}