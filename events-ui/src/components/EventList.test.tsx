import {EventList} from "./EventList";
import {Event, updateEvent, deleteEvent} from "../services/eventService";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("../services/eventService");

const mockUpdateEvent = updateEvent as jest.MockedFunction<typeof updateEvent>;
const mockDeleteEvent = deleteEvent as jest.MockedFunction<typeof deleteEvent>;

function updateField(component: Element, value: string) {
  userEvent.clear(component);
  userEvent.type(component, value);
}

const updateEvents = () => void {};

describe("EventList", () => {
  it("display event data", async () => {
    const event:Event = {id:"test-id", title:"event-1", dateTime: new Date(), location: "room 1", guests: 1}
    const events = [event];

    render(<EventList events={events} updateEvents={updateEvents} />);

    expect(await screen.findByDisplayValue('event-1')).toBeInTheDocument()
    expect(await screen.findByDisplayValue('room 1')).toBeInTheDocument()
  });

  it("displays row for each event data", async () => {
    const event1:Event = {id:"test-id1", title:"event-1", dateTime: new Date(), location: "room 1", guests: 1}
    const event2:Event = {id:"test-id2", title:"event-2", dateTime: new Date(), location: "room 2", guests: 2}
    const events = [event1, event2]
    render(<EventList events={events} updateEvents={updateEvents}/>);

    expect(await screen.findByDisplayValue('event-1')).toBeInTheDocument()
    expect(await screen.findAllByRole('row')).toHaveLength(3) //header + 2 data rows
  });

  it("displays an update button for each event", async () => {
    const event1:Event = {id:"test-id1", title:"event-1", dateTime: new Date(), location: "room 1", guests: 1}
    const event2:Event = {id:"test-id2", title:"event-2", dateTime: new Date(), location: "room 2", guests: 2}
    const events = [event1, event2]
    render(<EventList events={events} updateEvents={updateEvents}/>);

    expect(screen.queryAllByRole('button', {name: /update/i})).toHaveLength(2);
  });

  describe("update button", ()=> {
    it("calls update event data with correct information", async () => {
      const eventDateTime = new Date()
      const event:Event = {id:"test-id1", title:"event-1", dateTime: eventDateTime, location: "room 1", guests: 1}
      const events = [event]
      mockUpdateEvent.mockResolvedValue({id:"test-id1", title:"event-1", dateTime: eventDateTime, location: "room 1", guests: 1})

      render(<EventList events={events} updateEvents={updateEvents}/>);
      updateField(screen.getByLabelText('Title'), "event-2")
      updateField(screen.getByLabelText('Location'), "room 2")
      updateField(screen.getByLabelText('Guests'), "2")

      await userEvent.click(screen.getByRole('button', {name: /update/i}))
      // await userEvent.click(screen.getByRole('button', {name: /delete/i}))

      expect(mockUpdateEvent).toHaveBeenCalledWith("test-id1", {id:"test-id1", title:"event-2", dateTime: eventDateTime, location: "room 2", guests: "2"})
    });
  });

  it("displays a delete button for each event", async () => {
    const event1:Event = {id:"test-id1", title:"event-1", dateTime: new Date(), location: "room 1", guests: 1}
    const event2:Event = {id:"test-id2", title:"event-2", dateTime: new Date(), location: "room 2", guests: 2}
    const events = [event1, event2]
    render(<EventList events={events} updateEvents={updateEvents}/>);

    expect(screen.queryAllByRole('button', {name: /delete/i})).toHaveLength(2);
  });

  describe("delete button", () => {
    it("calls delete event data with correct information", async () => {
      // Create a mock event and events array
      const eventDateTime = new Date();
      const event:Event = {id:"test-id1", title:"event-1", dateTime: eventDateTime, location: "room 1", guests: 1}
      const events = [event];
  
      // Mock the deleteEvent function
      mockDeleteEvent.mockResolvedValue({});
      mockUpdateEvent.mockResolvedValue({id:"test-id2", title:"event-2", dateTime: eventDateTime, location: "room 2", guests: 5})

  
      // Render the component with the mock event and mock function
      render(<EventList events={events} updateEvents={updateEvents} />);
  
      // Click the delete button
      await userEvent.click(screen.getByRole("button", { name: /delete/i }));
  
      // Expect the deleteEvent function to be called with the correct arguments
      expect(mockDeleteEvent).toHaveBeenCalledWith("test-id1");
  
      // Expect the update function to be called with true argument after successful delete
      // expect(mockUpdateEvent).toHaveBeenCalledWith(true);
    });
  });
   
});