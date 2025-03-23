import Cookies from 'js-cookie';

const ACCESS_TOKEN_COOKIE_NAME = 'accessToken';
const REFRESH_TOKEN_COOKIE_NAME = 'refreshToken';

export const jwtTokens = {
  get() {
    return {
      accessToken: Cookies.get(ACCESS_TOKEN_COOKIE_NAME),
      refreshToken: Cookies.get(REFRESH_TOKEN_COOKIE_NAME),
    };
  },
  set(accessToken?: string, refreshToken?: string) {
    if (accessToken) {
      Cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken);
    }

    if (refreshToken) {
      Cookies.set(REFRESH_TOKEN_COOKIE_NAME, refreshToken);
    }
  },
  clear() {
    Cookies.remove(ACCESS_TOKEN_COOKIE_NAME);
    Cookies.remove(REFRESH_TOKEN_COOKIE_NAME);
  },
};

