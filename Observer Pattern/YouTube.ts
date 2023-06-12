import { ISubject } from "./ISubject";
import { Observer } from "./Observer";

export class YouTube implements ISubject {
  youtuber: string;
  subscribers: Observer[] = [];

  constructor(youtuber: string) {
    this.youtuber = youtuber;
  }

  subscribe(newObserver: Observer): void {
    this.subscribers.push(newObserver);
  }

  unsubscribe(deleteObserver: Observer): void {
    const observerIndex = this.subscribers.indexOf(deleteObserver);
    console.log(`Observer ${observerIndex + 1} deleted`);
    this.subscribers.splice(observerIndex, 1);
  }

  notifyObservers(videoName: string): void {
    for (const subscriber of this.subscribers) {
      subscriber.update(this.youtuber, videoName);
    }
  }

  videoName(videoName: string) {
    console.log(`${this.youtuber} has uploaded a new vídeo: ${videoName}`);
    this.notifyObservers(videoName);
  }
}
