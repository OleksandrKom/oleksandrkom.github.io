import { 
  COUNTER1_PLUS2,
  COUNTER1_MINUS5,
  COUNTER2_PLUS1,
  COUNTER2_MINUS1,
 } from './countTypes';

export const c1plus2 = () => ({ type: COUNTER1_PLUS2 });
export const c1minus5 = () => ({ type: COUNTER1_MINUS5 });
export const c2plus1 = () => ({ type: COUNTER2_PLUS1 });
export const c2minus1 = () => ({ type: COUNTER2_MINUS1 });
