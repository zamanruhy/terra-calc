const modals = new Set()
// let offsetElements = null
// let scrollbarWidth = null
let top = 0

export default function useModal() {
  return { registerModal, unregisterModal, trapFocus }
}

export function registerModal(modal) {
  if (modals.has(modal)) return

  modals.add(modal)
  if (modals.size === 1) {
    enter()
    // setScrollbar()
    // document.body.style.overflow = 'hidden'
  }
}

export function unregisterModal(modal) {
  if (!modals.has(modal)) return

  modals.delete(modal)
  if (modals.size === 0) {
    exit()
    // resetScrollbar()
    // document.body.style.overflow = ''
  }
}

function enter() {
  document.documentElement.style.setProperty(
    '--scrollbar-visible-width',
    `${window.innerWidth - document.documentElement.clientWidth}px`
  )
  top = window.scrollY
  Object.assign(document.body.style, {
    paddingRight: 'var(--scrollbar-visible-width)',
    overflow: 'hidden',
    position: 'fixed',
    width: '100%',
    top: `${top * -1}px`
  })
}

function exit() {
  document.documentElement.style.removeProperty('--scrollbar-visible-width')
  Object.assign(document.body.style, {
    paddingRight: '',
    overflow: '',
    position: '',
    width: '',
    top: ''
  })
  document.documentElement.style.scrollBehavior = 'auto'
  window.scrollTo(0, top)
  document.documentElement.style.scrollBehavior = ''
}

// function checkBodyOverflow() {
//   return window.innerWidth > document.documentElement.clientWidth
// }

// function setScrollbar() {
//   if (!checkBodyOverflow()) {
//     return
//   }
//   offsetElements = [
//     document.body,
//     ...Array.from(document.querySelectorAll('[data-fixed]'))
//   ]
//   offsetElements.forEach((el) => {
//     const offset = el.getAttribute('data-fixed') || 'padding'
//     const actual = el.style[`${offset}Right`]
//     const computed = getComputedStyle(el)[`${offset}Right`]
//     el.setAttribute(`data-${offset}-right`, actual)
//     el.style[`${offset}Right`] = `${
//       parseFloat(computed) + getScrollbarWidth()
//     }px`
//   })
// }

// function resetScrollbar() {
//   if (offsetElements === null) return
//   offsetElements.forEach((el) => {
//     const offset = el.getAttribute('data-fixed') || 'padding'
//     el.style[`${offset}Right`] = el.getAttribute(`data-${offset}-right`)
//     el.removeAttribute(`data-${offset}-right`)
//   })
//   offsetElements = null
// }

// export function getScrollbarWidth() {
//   if (scrollbarWidth === null) {
//     const div = document.createElement('div')
//     div.style.cssText = `
//       width: 100px;
//       height: 100px;
//       position: absolute;
//       overflow: scroll;
//       top: -9999px`
//     document.body.appendChild(div)
//     scrollbarWidth = div.offsetWidth - div.clientWidth
//     document.body.removeChild(div)
//   }
//   return scrollbarWidth
// }

function getFocusable(node) {
  // https://www.smashingmagazine.com/2021/07/accessible-dialog-from-scratch/
  const selector = [
    'a[href]',
    'area[href]',
    'input:not([type="hidden"]):not([type="radio"]):not([disabled])',
    'input[type="radio"]:not([disabled]):checked',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'iframe',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]',
    '[tabindex]'
  ]
    .map((s) => `${s}:not([tabindex^="-"])`)
    .join(', ')

  return Array.from(node.querySelectorAll(selector)).filter(
    (el) => el.offsetWidth || el.offsetHeight || el.getClientRects().length
  )
}

export function trapFocus(e) {
  if (e.key !== 'Tab') return

  const focusable = getFocusable(e.currentTarget)

  if (focusable.length === 0) {
    e.preventDefault()
    return
  }

  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  const active = document.activeElement

  if (e.shiftKey) {
    if (active === first || active === e.currentTarget) {
      last.focus()
      e.preventDefault()
    }
  } else {
    if (active === last) {
      first.focus()
      e.preventDefault()
    }
  }
}
