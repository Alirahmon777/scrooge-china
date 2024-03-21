import { useEffect, useState } from 'react';

const useKeyPress = (targetKeys: string[]): boolean => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const downHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && targetKeys.includes(event.key)) {
      setIsKeyPressed(true);
    }
  };

  const upHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && targetKeys.includes(event.key)) {
      setIsKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKeys]);

  return isKeyPressed;
};

export default useKeyPress;
