export enum ModifierKey {
  Alt = 'altKey',
  Control = 'ctrlKey',
  Meta = 'metaKey',
  Shift = 'shiftKey',
}

export function onKeyPress(modifierKeys: ModifierKey[], key: string, callback: () => void) {
  document.addEventListener('keydown', function(event) {
    if (modifierKeys.every(modifier => event[modifier])) {
      if (event.key === key) {
        callback();
      }
    }
  });
}
