import { ComponentProps, JSXElement, mergeProps, Ref, Show, splitProps } from "solid-js"

interface Props {
  variant?: 'primary' | 'secondary' | 'subtle' | 'destructive'
  icon?: JSXElement
  ref?: Ref<'button'>
}

const defaultProps: Required<Pick<Props, 'variant'>> = {
  variant: 'primary',
}
export const Button = (oriProps: ComponentProps<'button'> & Props) => {
  const [props, rootProps] = splitProps(mergeProps(defaultProps, oriProps), [
    'class',
    'icon',
    'children',
    'variant',
  ])

  return (
    <button
      {...rootProps}
      class={props.icon ? 'flex' : ''}
    >
      <Show when={props.icon}>
        <span >{props.icon}</span>
      </Show>
      <Show when={props.children} keyed>
        <span >{props.children}</span>
      </Show>
    </button>
  )
}