import { execute, MCFunction, rel, tellraw, _ } from 'sandstone'

MCFunction('load', () => {
  tellraw('@a', [
    '\n========= Bunkercraft =========\n\n',
    { text: ' Bunkercraft', color: 'black', bold: true }, ' has been ', { text: 'successfully installed.\n\n', color: 'green' },
    ' Add files to the ', { text: 'src', underlined: true }, ' folder\n',
    ' and start creating your data pack!\n',
    '==============', { text: '🏹', color: '#D2691E' }, { text: '⚔', color: '#45ACA5' }, { text: '⛏', color: '#FFD700' }, '==============',
 ])
}, {
  runOnLoad: true,
})

MCFunction('ash', () => {
 /* tellraw('@a', [
    '\n========= Congratulations! =========\n\n',
    { text: ' Sandstone', color: 'gold', bold: true }, ' is ', { text: 'successfully installed.\n\n', color: 'green' },
    ' Add files to the ', { text: 'src', underlined: true }, ' folder\n',
    ' and start creating your data pack!\n',
    '==============', { text: '🏹', color: '#D2691E' }, { text: '⚔', color: '#45ACA5' }, { text: '⛏', color: '#FFD700' }, '==============',
 ])*/
  execute.as('@a').run.particle('minecraft:ash', rel(0, 0, 0), rel(0, 0, 0), 200, 7000, 'normal', '@s');
}, {
  runEachTick: true,
})

/*MCFunction('nuclear', () => {
  _.if(notSheltered, () => {

  })
}, {
  runEachTick: true,
})*/