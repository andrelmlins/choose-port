declare module 'choose-port' {
  function callback(portValid: string): void;

  export function choosePort(
    portInitial: Number,
    host: string,
    callback: callback
  ): void;

  export function choosePortSync(portInitial: Number, host: string): string;
}
