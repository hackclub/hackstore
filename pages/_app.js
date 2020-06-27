import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../Theme/theme'
import { ThemeProvider } from 'theme-ui'
import '../index.css'

import { Provider } from 'react-redux'
import store from '../State/store/index'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Meta as={Head} />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    )
  }
}
