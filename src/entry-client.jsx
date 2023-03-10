import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import App from './App'

if (import.meta.env.DEV) {
  render(
    () => (
      <Router>
        <App />
      </Router>
    ),
    document.querySelector('.lc')
  )
}
