import { ILoginResponse, IUser } from "./interfaces";

export type StringOrNumberArray = string[] | number[];
export type StringOrNumber = string | number;
export type PositionTypes = 'bottom' | 'top' | 'right' | 'left';

export type TStoredUser = IUser & ILoginResponse;
