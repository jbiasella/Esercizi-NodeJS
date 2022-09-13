import { writeFile } from 'node:fs';


const data = new Uint8Array(Buffer.from('Prova file!'));
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});