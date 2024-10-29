import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 15526,
  login: 'viKZj@hv6ExW\\uJUCu1k\\Qk',
};

export const sampleWithPartialData: IUser = {
  id: 25155,
  login: 'wdkdB',
};

export const sampleWithFullData: IUser = {
  id: 21539,
  login: 'rd2Kx',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
