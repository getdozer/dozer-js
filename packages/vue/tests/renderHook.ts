import { defineComponent } from "vue";
import { render } from '@testing-library/vue';
import { DozerProvider } from "../src/context";

export function renderHook (hook: () => any) {
  let result: any = {};
  const wrapper = DozerProvider;

  const props = {
    value:  {
      serverAddress: 'test-address'
    },
  };

  const inner = defineComponent({
    setup() {
      result = hook();
    },
    render: () => {}
  })

  const { unmount, rerender } = render(wrapper, {
    props,
    slots: {
      default: inner,
    }
  });

  return { result, unmount, rerender };
}
