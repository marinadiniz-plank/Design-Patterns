export interface Observer {
  update(name: string, message: string): void;
}
