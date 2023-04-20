import {Button, InputLabel, Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";

export const EventMessagesDialog = (props: { open: boolean, setOpen: (open: boolean) => void, messages: any[], setMessages: (val: any) => void }) => {
  
    return (<>
      <Dialog open={props.open} onClose={props.setOpen} key="eventMsg">
        <DialogTitle>Event Messages</DialogTitle>
        <DialogContent>
          {props.messages.length > 0 && 
            props.messages.map(e => <InputLabel key={e.msg}>
              {e.msg}<br />
            </InputLabel>)}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => {props.setOpen(false); props.setMessages([])}}>Cancel</Button>
        </DialogActions>
      </Dialog>
      </>)
}