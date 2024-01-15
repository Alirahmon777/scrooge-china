import React, { FunctionComponent, LazyExoticComponent, ReactNode } from 'react';

export interface IChildProps {
  children: React.ReactNode;
}

export interface IRoutes {
  path?: string;
  component?: React.FC<{}> | LazyExoticComponent<React.FC<{}>>;
  element?: ReactNode;
  children?: IRoutes[];
}

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  image: string | null;
  region: string | null;
  district: string | null;
  address: string | null;
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface IUserResponse {
  success: false;
  errors: {
    field: string;
    message: string;
    code: string;
  }[];
  data: IUser;
}
