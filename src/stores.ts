import { readable, writable } from 'svelte/store';
import type { IGrinder } from './models';

export const grinders = readable<IGrinder[]>([{ name: '1zpresso JX', clickSizeInMm: 0.025 }]);

export const comandanteClickSize = writable<number>(0.03)
