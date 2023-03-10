// function animateScroll(to, duration) {
//   const from = document.scrollingElement.scrollTop
//   const diff = to - from
//   let start = performance.now()

//   function update(time) {
//     const elapsed = Math.max(time - start, 0)
//     const progress = Math.min(elapsed / duration, 1)
//     const easing = (x) => 1 - (1 - x) ** 3 // easeOutCubic
//     const value = from + diff * easing(progress)
//     document.scrollingElement.scrollTop = value

//     if (elapsed < duration) {
//       requestAnimationFrame(update)
//     }
//   }

//   requestAnimationFrame(update)
// }

;(() => {
  const el = document.querySelector('.lc-parts')
  const prevEl = el.querySelector('.lc-parts__prev')
  const nextEl = el.querySelector('.lc-parts__next')
  const containerEl = el.querySelector('.lc-parts__container')
  const itemEls = Array.from(el.querySelectorAll('.lc-parts__item'))
  const itemWidth = itemEls[0].offsetWidth
  let offsetWidth = containerEl.offsetWidth
  let scrollWidth = containerEl.scrollWidth
  let index = 0

  function onScroll() {
    console.log(containerEl.scrollLeft === scrollWidth - offsetWidth)

    if (containerEl.scrollLeft === 0) el.classList.add('lc-parts_start')
    else el.classList.remove('lc-parts_start')

    if (containerEl.scrollLeft === scrollWidth - offsetWidth)
      el.classList.add('lc-parts_end')
    else el.classList.remove('lc-parts_end')
  }

  function changeIndex(dir = 1) {
    index = Math.min(
      Math.max(0, index + dir),
      Math.ceil((scrollWidth - offsetWidth) / itemWidth)
    )
    return index
  }

  containerEl.addEventListener('scroll', onScroll)

  nextEl.addEventListener('click', () => {
    containerEl.scrollLeft = 243 * changeIndex(1)
  })

  prevEl.addEventListener('click', () => {
    containerEl.scrollLeft = 243 * changeIndex(-1)
  })

  // onScroll()
})()
