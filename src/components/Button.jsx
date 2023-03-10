import { splitProps, mergeProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import './Button.css'

export default function Button(props) {
  props = mergeProps({ as: 'button' }, props)
  const [, rest] = splitProps(props, [
    'class',
    'classList',
    'as',
    'variant',
    'size',
    'disabled',
    'children',
    'href'
  ])

  return (
    <Dynamic
      component={props.as}
      class="lc-button"
      classList={{
        [props.class]: Boolean(props.class),
        ...props.classList,
        [`lc-button_${props.size}`]: Boolean(props.size),
        [`lc-button_${props.variant}`]: Boolean(props.variant)
      }}
      href={props.disabled ? null : props.href}
      disabled={props.disabled}
      {...rest}
    >
      {props.children}
    </Dynamic>
  )
}
