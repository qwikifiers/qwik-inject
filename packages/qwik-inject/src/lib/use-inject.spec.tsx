import { component$ } from '@builder.io/qwik';
import { createDOM } from '@builder.io/qwik/testing';
import { test, expect, vi } from 'vitest';


// function setup() {
//   const FakeComponent = component$(() => {
    
//   });
//   return {

//   }
// }

vi.mock('useContext');
vi.mock('useStore');

test(`QwikInject`, async () => {
  const { screen, render } = await createDOM();

  expect(screen.innerHTML).toBeTruthy();
});
