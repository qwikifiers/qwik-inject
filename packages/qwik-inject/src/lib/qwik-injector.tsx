import { component$, createContext, Slot, useContextProvider, QRL, $, useClientEffect$, useStore } from '@builder.io/qwik';
import { createInjectionToken } from './create-injection-token';

export const QwikInjectorContextToken = createContext<InjectionMap<any>>('QwikInjectorContextToken');

export type InjectionMap<STATE extends object> = { [key: symbol]: STATE };

export const QwikInjector = component$(() => {
  const injectionMap = useStore<InjectionMap<any>>({});

  useContextProvider(QwikInjectorContextToken, injectionMap);

  useClientEffect$(({ track }) => {
    
    // Prevent a bug where context doesn't exist on SSR + Link
    const foo = track(() => injectionMap)

  })

  return <Slot/>;
});
