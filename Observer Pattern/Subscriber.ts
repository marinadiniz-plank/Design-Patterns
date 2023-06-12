import { Observer } from "./Observer";

export class Subscriber implements Observer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(youtuber: string, videoName: string): void {
    console.log(
      `${this.name}, ${youtuber} has just uploaded a new vídeo: ${videoName}`
    );
  }
}
