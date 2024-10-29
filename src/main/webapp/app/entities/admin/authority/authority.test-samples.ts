import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '79af8511-b719-460e-bce7-9407479a1c1b',
};

export const sampleWithPartialData: IAuthority = {
  name: 'b8dea23b-0fd6-4f12-94e5-805d97b5421b',
};

export const sampleWithFullData: IAuthority = {
  name: '8cbfd7c7-d236-40d2-a5c2-44ea5e1da4f6',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
