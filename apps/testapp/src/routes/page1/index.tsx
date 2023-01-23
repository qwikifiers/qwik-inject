import { component$} from '@builder.io/qwik';
import { useInject } from 'qwik-inject';
import { ProductStoreToken } from '../../_state/products-store-token';

export default component$(() => {

  const productStore = useInject(ProductStoreToken);

  return <div>

    <h1>This is the page1</h1>

    <div>
      <h2>Products: </h2>
      <ul>
        
        {productStore.map(product => {
          return <li >{product.name}</li>
        })}
        
      </ul>

    </div>
  
  </div>;
});
