import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome testapp!
      </h1>

      <div>

        <Link href="/page1">Page 1</Link>
        <hr />
        <Link href="/page2">Page 2</Link>
      </div>
      
    </div>
  );
});
