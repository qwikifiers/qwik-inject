import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { QwikInjector } from 'qwik-inject';

export default component$(() => {
  return (
    <QwikInjector>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </QwikInjector>

  );
});
