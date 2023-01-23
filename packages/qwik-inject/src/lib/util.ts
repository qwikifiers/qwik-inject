// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (v: unknown): v is Function => {
  return typeof v === 'function';
};