const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() {
  const command = `./lib/shrink.sh Example.pdf Example_compressed.pdf`;

  const { stdout, stderr } = await exec(command);
  //console.log('stdout:', stdout);
  if (stderr) console.log('stderr:', stderr); //show errors
}

main();
