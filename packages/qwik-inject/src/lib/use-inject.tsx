import { useContext, useStore } from '@builder.io/qwik';
import { InjectionToken } from './injection-token.type';
import { QwikInjectorContextToken } from './qwik-injector';

export function useInject<T>(token: InjectionToken<T>): T {
  const injectionMap = useContext(QwikInjectorContextToken);
  
  let value = injectionMap[token.tokenSymbol];
  if (!value) {
    value = token.provider ? token.provider() : null;
    injectionMap[token.tokenSymbol] = useStore(value);
  }
  return value as T;
  
}