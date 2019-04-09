import * as React from 'react'
import { createContextProvider } from '@lib/context-hook'
import { reducer } from './reducer'

export const defaultState = {
  count: 0
}

export const ContextProvider = createContextProvider(defaultState, reducer)