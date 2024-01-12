import { useEffect, useState } from 'react';

const useDropdownDirection = (
  opened: boolean,
  containerRef: React.RefObject<HTMLElement>,
  optionsRef: React.RefObject<HTMLElement>,
  treshold = 10
) => {
  const [direction, setDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    if (opened && !!optionsRef.current && !!containerRef.current) {
      const bottomOfScreen = window.innerHeight + window.scrollY;
      const topOfScreen = window.scrollY;
      const { height } = optionsRef.current.getBoundingClientRect();
      const { top, bottom } = containerRef.current.getBoundingClientRect();

      if (direction === 'down') {
        if (bottom + height + treshold > bottomOfScreen && top - treshold - height > topOfScreen) {
          setDirection('up');
        }
        return;
      }

      if (bottom + height + treshold < bottomOfScreen) {
        setDirection('down');
      }
    }
  }, [opened]);

  return direction;
};

export default useDropdownDirection;
