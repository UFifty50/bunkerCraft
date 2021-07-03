import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'bunkerCraft',
  description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
  formatVersion: 6,
  namespace: 'bunkercraft',
  packUid: 'iq2FQxtr',
  saveOptions: { root: true },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
