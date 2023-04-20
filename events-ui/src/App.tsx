import React, {useEffect, useState} from 'react';
import './App.css';
import {Alert, Button, Container} from "@mui/material";
import {EventList} from "./components/EventList";
import {Event, getEvents} from "./services/eventService";
import {CreateEventDialog} from "./components/CreateEventDialog";
import {Notification} from './components/CreateNotification';
import {EventMessagesDialog} from './components/EventMessagesDialog';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080';

function App() {
  const [error, setError] = useState<string>()
  const [createDialog, setCreateDialog] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const openCreateDialog = () => setCreateDialog(true);

  useEffect(() => {
    getEvents()
      .then((events) => setEvents(events))
      .then(() => setUpdate(false))
      .catch((error) => error.error ? setError(error.error) : console.log("unknown error")); 
  }, [createDialog, update]);

  return (
    <Container>
      {error && <Alert onClose={() => setError(undefined)} severity="error">API {error}</Alert>}
      <Button variant="contained" onClick={openCreateDialog} sx={{mt: 2, mb: 2}}>New Event</Button>
      <CreateEventDialog open={createDialog} setOpen={setCreateDialog}/>
      <Notification events={events} setOpen={setOpen} messages={messages}/>
      <EventList events={events} updateEvents={setUpdate}/>
      <EventMessagesDialog open={open} setOpen={setOpen} messages={messages} setMessages={setMessages}/>
      {/* <EventList events={events} /> */}
    </Container>
  );
}

export default App;
