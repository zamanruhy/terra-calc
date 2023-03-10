import { renderToString } from 'solid-js/web'
import { Router } from '@solidjs/router'
import App from './App'

export function render(url) {
  let body = renderToString(() => (
    <Router url={url}>
      <App />
    </Router>
  ))

  body = body.replace(/\sdata-hk=".+?"/g, '')
  return { head: '', body }
}
