import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../Theme/theme'
import { ThemeProvider } from 'theme-ui'
import 'simplebar/dist/simplebar.min.css'
import '../index.css'
/**index.css contains normalize.css for consistency across multiple browser and also has some global css (in the end of file) */

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
