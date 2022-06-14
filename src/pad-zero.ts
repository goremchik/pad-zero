import { curry } from 'lodash';

function _padZero(pad = 2, value = 0): string {
  return ('0'.repeat(pad - 1) + value).slice(-pad);
}

export const padZero: (pad: number, value?: number) => any = curry(_padZero);
