import { ILoginResponse, IStateOrder, IUser } from './interfaces';

export type StringOrNumberArray = string[] | number[];
export type StringOrNumber = string | number;
export type PositionTypes = 'bottom' | 'top' | 'right' | 'left';

export type TStoredUser = IUser & ILoginResponse;

export type TStoreOrderModerator = { steam_id: string } & IStateOrder;
export type TStoreOrderUser = { moderator_id: string } & IStateOrder;
