import {
  component$
} from '@builder.io/qwik';
import { useInject } from 'qwik-inject';
import { ProductStoreToken } from '../../_state/products-store-token';

export default component$(() => {
  const productStore = useInject(ProductStoreToken);

  return (
    <div>
      <h2>This is the page2</h2>

      <div>
        <button
          onClick$={() => {
            productStore.push({
              id: '1',
              name: 'Product 1',
              price: 100,
            });
          }}
        >
          Add product
        </button>
      </div>

      <div>
        <h2>Products: </h2>

        <ul>
          {productStore.map((product) => {
            return <li>{product.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
});
