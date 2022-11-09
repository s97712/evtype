import { EventTyped, Evtype, } from ".";
import mitt from "mitt";

export class Emiter<T extends EventTyped> extends Evtype<T> {
  private emiter = mitt();

  protected dispatch(name: string, ...args: any): void {
    this.emiter.emit(name, args)
  }

  protected listen(name: string, handler: (...args: any[]) => void): void {
    this.emiter.on(name, (args) => handler(...args as any[]))
  }

  protected unlisten(name: string, hander?: (...args: any[]) => void): void {
    this.emiter.off(name, hander)
  }

}

