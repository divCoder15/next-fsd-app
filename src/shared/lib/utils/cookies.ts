import { CookiesPeriod, CookiesTime } from '@/shared/types/cookies/cookies';

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(
  name: string,
  value: string,
  time: `${number}${'s' | 'm' | 'h' | 'd'}`,
) {
  const date = new Date();
  const cookieTime = parseCookiesTime(time);

  date.setTime(date.getTime() + cookieTime);

  document.cookie =
    name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}

export const deleteCookie = (name: string) => {
  document.cookie = name + '=; max-age=-1; path=/';
};

const parseCookiesTime = (time: CookiesTime) => {
  const unit = Number(time.slice(0, -1));
  const type = time.slice(-1) as CookiesPeriod;

  switch (type) {
    case 's':
      return unit * 1000;
    case 'm':
      return unit * 60 * 1000;
    case 'h':
      return unit * 60 * 60 * 1000;
    case 'd':
      return unit * 24 * 60 * 60 * 1000;
  }
};
