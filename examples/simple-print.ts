import * as EscPosPrinter from '../index';
import Prompt from 'prompt-sync';

const prompt = Prompt();

EscPosPrinter.getDevices().then((ports) => {
  console.info('Choose your device:');
  ports.forEach((port, i) => {
    console.info(`${i}: ${port.path} - ${port.manufacturer}`);
  });

  const deviceNumber = Number(prompt('Type the number of your printer device: '));
  
  const device = ports[deviceNumber];
  console.log(device);

  const textToPrint = prompt('What would you like to print?');
  console.log(textToPrint);

  EscPosPrinter.printText(device, textToPrint).then(console.log);
});