export interface EventTyped {
  [P: string]: (...args: any[]) => void
}

export abstract class Evtype<T extends EventTyped> {

  protected abstract dispatch(name: string, ...args: any[]): void;
  protected abstract listen(name: string, hander: EventTyped[string]): void;
  protected abstract unlisten(name: string, hander: EventTyped[string]): void;

  emit<N extends keyof T>(name: N & string, ...args: Parameters<T[N]>) {
    this.dispatch(name, ...args);
  }

  on<N extends keyof T>(name: N & string, hander: (...args: Parameters<T[N]>) => void) {
    this.listen(name, hander as any)
  }

  off<N extends keyof T>(name: N & string, hander: (...args: Parameters<T[N]>) => void) {
    this.unlisten(name, hander as any)
  }

}

