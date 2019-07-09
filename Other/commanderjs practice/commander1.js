var program = require('commander');


program
  .version('0.1.0')
  .option('-p, --person', "I'm xzdry")
  .option('-c, --cool', 'xzdry is cool')
  .option('-d, --dance', 'you can really dance')
  .option('-D, --choose-dance [type]', 'now you can dance [冬天里的一把火]', '冬天里的一把火')
  .parse(process.argv);

console.log('please dance:');
if (program.person) console.log(' - person');
if (program.cool) console.log(' - cool');
if (program.dance) console.log(' - dance');
console.log(' - %s chooseDance', program.chooseDance);