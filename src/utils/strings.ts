export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getIdFromPathname = (): string => {
  return window.location.pathname.split('/')[2];
};
