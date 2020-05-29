declare module 'choose-port' {
  type Callback = (portValid: string) => void;

  export function choosePort(
    portInitial: Number,
    host: string,
    callback: Callback
  ): void;

  export function choosePortSync(portInitial: Number, host: string): string;
}
