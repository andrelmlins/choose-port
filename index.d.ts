declare module 'choose-port' {
  type Callback = (portValid: Number) => void;

  export function choosePort(
    portInitial: Number,
    host: string,
    callback: Callback
  ): void;

  export function choosePortSync(portInitial: Number, host: string): string;

  export default choosePort;
}
