import React from 'react';
import { TYPES } from './data';
import { useSelector as _useSelector } from 'react-redux';
type S = TYPES.Store;

/*----------------------------------------------------------------------------*/

export function useSelector<T, A extends T[], R>(
  selector: (store: S, ...args: A) => R,
  ...args: A
) {
  /* eslint-disable react-hooks/exhaustive-deps */
  const func = React.useMemo(() => {
    return (state: S) => selector(state, ...args);
  }, [ selector, ...args ]);

  return _useSelector(func);
}