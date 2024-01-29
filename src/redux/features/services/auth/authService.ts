import { apiService } from '../../basics/apiService';
import { ILoginData } from '@/admin/types/interfaces';
import { ISteamSuccessParams } from '@/types/interfaces';
import { setAdminToken, setUserToken } from '../../slices/auth/authReducer';
import { userService } from '../user/userService';
import { adminService } from '../admin/adminService';

export const authServices = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAuthLink: builder.query<TAuthLink, void>({
      query: () => '/auth/user/link',
    }),

    getCallback: builder.query<TAdminLogin, ISteamSuccessParams>({
      query: (args: ISteamSuccessParams) => {
        return { url: '/auth/user/callback', params: args };
      },
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserToken({ token: data.token }));
          dispatch(userService.endpoints.getProfile.initiate());
        } catch (error) {
          dispatch(setUserToken({ token: null }));
        }
      },
    }),

    loginAdmin: builder.mutation<TAdminLogin, ILoginData>({
      query: (initialPost: ILoginData) => ({
        url: '/auth/admin/login',
        method: 'POST',
        body: initialPost,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          dispatch(setAdminToken({ admin_token: data.token }));
          dispatch(adminService.endpoints.getSelf.initiate());
        } catch (error) {
          dispatch(setAdminToken({ admin_token: null }));
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetAuthLinkQuery, useLoginAdminMutation, useGetCallbackQuery } = authServices;

export type TAuthLink = {
  link: string;
};

export type TAdminLogin = {
  token: string;
};
