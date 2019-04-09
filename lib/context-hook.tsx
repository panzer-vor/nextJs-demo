import React, {useReducer, useContext} from 'react'

const Context = React.createContext(undefined)

const useCtx = () => {
  return useContext(Context)
}

const createContextProvider = (initialState, reducer) => {
  return (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
      <Context.Provider value={{state, dispatch}} >
        {props.children}
      </Context.Provider>
    )
  }
}

export {createContextProvider, useCtx}
