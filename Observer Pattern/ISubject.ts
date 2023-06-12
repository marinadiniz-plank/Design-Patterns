import { Observer } from "./Observer";

export interface ISubject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notifyObservers(message: string): void;
}
