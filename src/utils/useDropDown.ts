import { useEffect, useState } from 'react';
import useClickOutside from './useClickOutside';

type DropDownState = 'closed' | 'hidden' | 'up' | 'down';

export interface UseDropDownOptions {
  treshold?: number;
  onTriggered?: (opened: boolean) => void;
}

const useDropDown = (
  triggerRef: React.RefObject<HTMLElement>,
  optionsRef: React.RefObject<HTMLElement>,
  options?: UseDropDownOptions
) => {
  const [triggered, setTriggered] = useState<boolean>(false);
  const [state, setState] = useState<DropDownState>('closed');

  const { treshold = 10, onTriggered } = options || {};

  const handleTriggerClick = () => {
    if (triggered) {
      setState('closed');
    } else {
      setState('hidden');
    }
    if (!!onTriggered) onTriggered(!triggered);
    setTriggered((p) => !p);
  };

  useClickOutside(() => {
    if (triggered) {
      handleTriggerClick();
    }
  }, triggerRef);

  useEffect(() => {
    if (state === 'hidden' && !!optionsRef.current && !!triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const optionsRect = optionsRef.current.getBoundingClientRect();

      if (triggerRect.bottom + optionsRect.height + treshold > window.innerHeight) {
        setState('up');
      } else {
        setState('down');
      }
    }
  }, [triggered, optionsRef, treshold, triggerRef]);

  return {
    isOpen: state === 'up' || state === 'down',
    state,
    handleTriggerClick
  };
};

export default useDropDown;
