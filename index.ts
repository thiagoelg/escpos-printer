import SerialPort, { PortInfo } from 'serialport';
import EscPosEncoder from 'esc-pos-encoder';

export async function getDevices(): Promise<PortInfo[]> {
  return await SerialPort.list();
}

export async function printText(device: PortInfo, text: string): Promise<void> {
  const encoder = new EscPosEncoder();
  const result = encoder.initialize().newline().codepage('windows1252').text(text).newline().newline().newline().newline().newline().newline().cut().encode();

  const port = new SerialPort(device.path);
  port.write(Buffer.from(result));
}