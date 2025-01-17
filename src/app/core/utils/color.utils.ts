import { Maybe } from 'src/schema/schema';

export const invertColor = (hex?: Maybe<string>): string | undefined => {
  if (hex?.indexOf('#') === 0) {
    hex = hex?.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex?.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex?.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  const r = parseInt(hex?.slice(0, 2), 16),
        g = parseInt(hex?.slice(2, 4), 16),
        b = parseInt(hex?.slice(4, 6), 16);

  // https://stackoverflow.com/a/3943023/112731
  return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF';
}

export const padZero = (str?: Maybe<string>, len?: Maybe<number>): string | undefined => {
    len = len || 2;
    const zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}