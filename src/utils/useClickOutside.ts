import { useEffect } from 'react';
const useClickOutside = (callback: () => void, ref: React.RefObject<HTMLElement>) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);
};

export default useClickOutside;
