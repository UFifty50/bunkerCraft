import { effect, execute, MCFunction, rel, tellraw, Tag, _, say } from 'sandstone'
const noWitherBlocks = Tag('blocks', 'no_wither', [
  '#minecraft:buttons',
  '#minecraft:slabs',
  '#minecraft:trapdoors',
  '#minecraft:saplings',
  '#minecraft:leaves',
  '#minecraft:rails',
  '#minecraft:flowers',
  '#minecraft:stairs',
  '#minecraft:wooden_pressure_plates',
  '#minecraft:fences',
  '#minecraft:walls',
  '#minecraft:carpets',
  '#minecraft:doors',
  '#minecraft:signs',
  '#minecraft:beds',
  '#minecraft:banners',
   // '#minecraft:boats',
  'minecraft:light_weighted_pressure_plate',
  'minecraft:carved_pumpkin',
  'minecraft:cobweb',
  'minecraft:grass',
  'minecraft:brown_mushroom',
  'minecraft:red_mushroom',
  'minecraft:crimson_fungus',
  'minecraft:warped_fungus',
  'minecraft:crimson_roots',
  'minecraft:warped_roots',
  'minecraft:nether_sprouts',
  'minecraft:weeping_vines',
  'minecraft:twisting_vines',
  'minecraft:sugar_cane',
  'minecraft:kelp',
  'minecraft:bamboo',
  'minecraft:torch',
  'minecraft:end_rod',
  'minecraft:chorus_flower',
  'minecraft:chorus_plant',
  'minecraft:chest',
  'minecraft:ladder',
  'minecraft:snow',
  'minecraft:cactus',
  'minecraft:soul_torch',
  'minecraft:iron_bars',
  'minecraft:chain',
 // 'minecraft:vines',
  'minecraft:lily_pad',
  'minecraft:enchanting_table',
  'minecraft:end_portal_frame',
  'minecraft:ender_chest',
  'minecraft:tall_grass',
  'minecraft:large_fern',
  'minecraft:slime_block',
  'minecraft:scaffolding',
 // 'minecraft:painting',
 // 'minecraft:item_frame',
  'minecraft:flower_pot',
 // 'minecraft:armor_stand',
  'minecraft:skeleton_skull',
  'minecraft:wither_skeleton_skull',
  'minecraft:player_head',
  'minecraft:zombie_head',
  'minecraft:creeper_head',
  'minecraft:dragon_head',
// 'minecraft:end_crystal',
  'minecraft:composter',
  'minecraft:stonecutter',
  'minecraft:bell',
  'minecraft:lantern',
  'minecraft:soul_lantern',
  'minecraft:campfire',
  'minecraft:soul_campfire',
  'minecraft:sticky_piston',
  'minecraft:piston',
  'minecraft:tnt',
  'minecraft:lever',
  'minecraft:redstone_torch',
  'minecraft:tripwire_hook',
  'minecraft:daylight_detector',
  'minecraft:heavy_weighted_pressure_plate',
  'minecraft:hopper',
  'minecraft:trapped_chest',
 // 'minecraft:lecturn',
//  'minecraft:minecart',
  //'minecraft:chest_minecart',
  //'minecraft:furnace_minecart',
 // 'minecraft:tnt_minecart',
//  'minecraft:hopper_minecart',
  'minecraft:comparator',
  'minecraft:cave_air',
  'minecraft:repeater',
  'minecraft:redstone_wire',
   //todo: corals, glass, glass panes, gates, bottom creative menu tabs
])

MCFunction('load', () => {
  tellraw('@a', [
    '\n========= Bunkercraft =========\n\n',
    { text: ' Bunkercraft', color: 'black', bold: true }, ' has been ', { text: 'successfully installed.\n\n', color: 'green' },
    ' Add files to the ', { text: 'src', underlined: true }, ' folder\n',
    ' and start creating your data pack!\n',
    '==============', { text: '🏹', color: '#D2691E' }, { text: '⚔', color: '#45ACA5' }, { text: '⛏', color: '#FFD700' }, '==============',
  ]);
  ash.schedule('5s');
}, {
  runOnLoad: true,
})

const ash = MCFunction('ash', () => {
  execute.as('@a').at('@s').run.particle('minecraft:falling_obsidian_tear', rel(0, 0, 0), [10, 10, 10], 200, 2500);
  execute.as('@a').at('@s').run.particle('minecraft:ash', rel(0, 0, 0), [10, 10, 10], 200, 60000);
}, {
  runEach: 20,
  runOnLoad: false,
})

MCFunction('nuclear', () => {
  /*execute.as('@a').at('@s').unless.block(rel(0, 1, 0), 'minecraft:cave_air').run.effect.give('@s', 'minecraft:wither', 1, 1, true);
  _.if(_.and(_.or(_.block(rel(0, 1, 0), 'minecraft:stone_button'), _.block(rel(0, 1, 0), 'minecraft:oak_button')), _.or(_.block(rel(0, 0, 0), 'minecraft:air'), _.block(rel(0, 0, 0), 'minecraft:cave_air'))), () => {
    execute.as('@a').at('@s').run.effect.clear('@s')
  })
  */
  _.if(_.not(_.and(
    _.block(rel(0, 0, 0), noWitherBlocks),
    _.block(rel(0, 1, 0), noWitherBlocks),
  )), () => {
    execute.as('@a').at('@s').run.effect.give('@s', 'minecraft:wither', 3, 0, true);
  })
}, {
  runEachTick: true,
})
