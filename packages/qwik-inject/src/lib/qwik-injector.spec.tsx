import { component$ } from '@builder.io/qwik';
import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { QwikInjector } from './qwik-injector';

function setup() {
  const FakeChildComp = component$(() => {
    return <>
      
    </>
  })

  return {
    FakeChildComp
  }
}

test(`Should be able to inject a token`, async () => {

  const {FakeChildComp} = setup()

  const { screen, render } = await createDOM();
  await render(<QwikInjector>
    <FakeChildComp/>

  </QwikInjector>);
  
  expect(screen.innerHTML).toBeTruthy();

});
