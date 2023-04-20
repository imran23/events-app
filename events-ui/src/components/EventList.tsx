import {Event, getEvents, updateEvent, deleteEvent} from "../services/eventService";
import {
  Button,
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import React, {ChangeEvent, ChangeEventHandler, useState} from "react";

const EventRow = (props: { event: Event, update: any, error: any  }) => {
  // const EventRow = (props: { event: Event }) => {
  const [formData, setFormData] = useState<Event>(props.event);

  const submitForm = () => {
    if (props.event.id) {
      updateEvent(props.event!.id, formData)
      .then(() => {
        props.error(null);
        props.update(true);
      })
      .catch((error) => {
        props.error(error);
      });
    }
  };

  const updateData: ChangeEventHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.id]: e.target.value,});
  };

  const deleteData = () => {
    if(props.event!.id){
      deleteEvent(props.event!.id)
        .then((e:any) => {
          console.log('deleted', e)
          props.update(true)})
        .catch((error) => console.log(error))
    }
  };

  return (
    <>
    <TableRow sx={{"&:last-child td, &:last-child th": {border: 0}}}>
      <TableCell><TextField onChange={updateData} margin="dense" id="title" label="Title" type="text"
                            defaultValue={props.event.title}/></TableCell>
      <TableCell><TextField onChange={updateData} margin="dense" id="dateTime" label="Date/Time" type="datetime-local"
                            defaultValue={props.event.dateTime}/></TableCell>
      <TableCell><TextField onChange={updateData} margin="dense" id="location" label="Location" type="text"
                            defaultValue={props.event.location}/></TableCell>
      <TableCell><TextField onChange={updateData} margin="dense" id="guests" label="Guests" type="number"
                            defaultValue={props.event.guests}/>
                            {/* {error && <Alert severity="error">{error.guests}</Alert>} */}
                            </TableCell>
      <TableCell><TextField onChange={updateData} margin="dense" id="coordinator" label="Coordinator" type="text"
                            defaultValue={props.event.coordinator}/></TableCell>                     
      <TableCell><Button id="update" onClick={submitForm} variant="outlined">Update</Button></TableCell>
      <TableCell style={{display: ""}}><Button id="delete" onClick={deleteData} variant="outlined">Delete</Button></TableCell>
    </TableRow>
    </>
  );
}

export const EventList = (props: { events: Event[], updateEvents: (val: boolean) => void}) => {
  // export const EventList = (props: { events: Event[] }) => {
    const [error, setError] = useState<Event>();

    const setUpdate = (val: boolean) => {
      if(val){
        props.updateEvents(true);
      }
    }

    const getError = (err: any) => {
      setError(err);
    }

  return (<>
  {error && <Alert severity="error">{error.guests}</Alert>} 
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Date/Time</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Guests</TableCell>
            <TableCell style={{display: ""}}>Coordinator</TableCell>
            <TableCell>Update</TableCell>
            <TableCell style={{display: ""}}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.events.map(event => <EventRow event={event} key={event.id} update={setUpdate} error={getError}/>)}
          {/* {props.events.map(event => <EventRow event={event} key={event.id} />)} */}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}