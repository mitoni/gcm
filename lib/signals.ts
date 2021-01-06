import { EventEmitter } from "events";

const EventBus = new EventEmitter();

export const execute = {
  setProjectHome: (...text: string[]) =>
    EventBus.emit(Events.SET_PROJECT_HOME, text),
  addProject: () => EventBus.emit(Events.ADD_PROJECT),
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
  SET_PROJECT_HOME = "SET_PROJECT_HOME",
  ADD_PROJECT = "ADD_PROJECT",
}
