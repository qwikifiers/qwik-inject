import { useStore } from '@builder.io/qwik';
import { createInjectionToken } from 'qwik-inject';
import { Product } from './product.type';

export const ProductStoreToken = createInjectionToken<Product[]>('ProductStore', () => useStore([]));