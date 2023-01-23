import { InjectionToken } from './injection-token.type';
import { isFunction } from './util';

export function createInjectionToken<T>(tokenName: string, provider?: T): InjectionToken<T>;
export function createInjectionToken<T>(tokenName: string, provider?: () => T): InjectionToken<T>;
export function createInjectionToken<T>(tokenName: string, providerOrValue?: T | (() => T)): InjectionToken<T> {

  let providerFn: (() => T) | undefined;
  
  if (providerOrValue ){
    if (!isFunction(providerOrValue)) {
      providerFn = () => providerOrValue;
    } else {
      providerFn = providerOrValue
    }
  }
  const tokenSymbol = Symbol(tokenName);

  return {
    tokenSymbol,
    provider: providerFn
  }
}