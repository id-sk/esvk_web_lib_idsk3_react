import { useEffect } from 'react';
const useClickOutside = (callback: () => void, ref: React.RefObject<HTMLElement>) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
};

export default useClickOutside;
