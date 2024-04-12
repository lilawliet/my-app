// 手写 useReducer

import { useState } from 'react'

export const useReducer = (reducer: (arg0: {}, arg1: any) => any, initialState = {}) => {
  const [state, setState] = useState(initialState)

  const dispatch = (action: any) => {
    const newState = reducer(state, action)
    setState(newState)
  }
  return [state, dispatch]
}
