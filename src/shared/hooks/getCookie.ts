export const getCookie = (name: string): string | undefined => {
  if (!document.cookie) return undefined
  const cookies = decodeURIComponent(document.cookie)
    .split(';')
    .reduce((acc: Record<string, string>, cookie: string) => {
      const [name, value] = cookie.split('=');
      acc[name.trim()] = value.trim();
      return acc;
    }, {});
  return cookies[name];
};
