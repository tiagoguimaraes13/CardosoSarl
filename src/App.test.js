import React, {act} from 'react';
import { createRoot } from 'react-dom/client';
import Homepage from './components/Homepage/Homepage';

global.IS_REACT_ACT_ENVIRONMENT = true;
let container, root;
beforeEach(() => { container=document.createElement('div'); document.body.appendChild(container); root=createRoot(container); act(() => root.render(<Homepage />)); });
afterEach(() => { act(() => root.unmount()); container.remove(); });
test('project filters show the matching collection without dead links', () => {
  expect(container.querySelectorAll('.landscape-projects article')).toHaveLength(6);
  act(() => [...container.querySelectorAll('button')].find(button => button.textContent==='Terrasses').click());
  expect(container.querySelectorAll('.landscape-projects article')).toHaveLength(2);
  expect(container.querySelector('.landscape-projects a')).toBeNull();
});
test('demo form confirms that no enquiry was sent', () => {
  const event = new Event('submit',{bubbles:true,cancelable:true});
  act(() => container.querySelector('form').dispatchEvent(event));
  expect(event.defaultPrevented).toBe(true);
  expect(container.querySelector('[role="status"]').textContent).toContain("Aucun message n'a été envoyé");
});
