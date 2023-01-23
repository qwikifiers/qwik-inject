export interface InjectionToken<T=unknown>{
  tokenSymbol: symbol;
  provider?: () => T;
}