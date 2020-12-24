import { EventEmitter } from "events";

const EventBus = new EventEmitter();

export const execute = {
  setProjectTitle: (text: string) =>
    EventBus.emit(Events.SetProjectTitle, text),
  setProjectDescription: (text: string) => {
    EventBus.emit(Events.SetProjectDescription, text);
  },
};

export const listen = (eventName: Events, func?: (...args: any[]) => void) => {
  return EventBus.on(eventName, func);
};

export const unlisten = (
  eventName: Events,
  func?: (...args: any[]) => void
) => {
  return EventBus.off(eventName, func);
};
export enum Events {
  SetProjectTitle = "SetProjectTitle",
  SetProjectDescription = "SetProjectDescription",
}
