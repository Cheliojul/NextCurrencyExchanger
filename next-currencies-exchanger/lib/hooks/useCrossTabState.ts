import { useState, useRef, useEffect } from 'react';

type useCrossTabStateType = (stateKey: string, defaultValue: string) => [string, (arg: string) => void]

export const useCrossTabState: useCrossTabStateType = (stateKey, defaultValue) => {
  const [state, setState] = useState(defaultValue);
  const isNewSession = useRef(true);

  useEffect(() => {
    if (isNewSession.current) {
      const currentState = localStorage.getItem(stateKey);
      if (currentState) {
        setState(JSON.parse(currentState));
      } else {
        setState(defaultValue);
      }
      isNewSession.current = false;
      return;
    }
    try {
      localStorage.setItem(stateKey, JSON.stringify(state));
    } catch (error) {}
  }, [state, stateKey, defaultValue]);

  useEffect(() => {
    const onReceieveMessage = (e: StorageEvent) => {
      const { key, newValue } = e;
      if (key === stateKey && newValue !== null) {
        setState(JSON.parse(newValue));
      }
    };
    window.addEventListener('storage', onReceieveMessage);
    return () => window.removeEventListener('storage', onReceieveMessage);
  }, [stateKey, setState]);

  return [state, setState];
};
