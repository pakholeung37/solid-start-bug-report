import { ComponentProps, JSXElement, Show } from "solid-js";

export const Button = (
  props: ComponentProps<"button"> & { icon: JSXElement }
) => {
  return (
    <button class={props.icon ? "flex" : ""}>
      <Show when={props.icon}>
        <span>{props.icon}</span>
      </Show>
      <Show when={props.children} keyed>
        <span>{props.children}</span>
      </Show>
    </button>
  );
};
