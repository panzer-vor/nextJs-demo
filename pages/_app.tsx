import App, {Container} from 'next/app'
import React from 'react'
import { ContextProvider } from '../store/index'


class ContextApp extends App {
  public render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </Container>
    )
  }
}

export default ContextApp