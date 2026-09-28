import { useState, useEffect } from 'react';

export function useKeyPress() {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keypresses when typing inside form inputs or textareas
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      if (e.key.length === 1 && e.key.match(/[a-zA-Z]/i)) {
        setPressedKey(e.key.toUpperCase());
      }
    };

    const handleKeyUp = () => {
      // Keep key highlighted briefly for a smooth feel
      const timeout = setTimeout(() => {
        setPressedKey(null);
      }, 1500);
      return () => clearTimeout(timeout);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return { pressedKey, setPressedKey };
}
