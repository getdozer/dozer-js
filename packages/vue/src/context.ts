import { DozerClientOptions } from '@dozerjs/dozer';
import { useDozerClient } from './useDozerClient';
import { defineComponent, inject, provide } from 'vue';
import type { InjectionKey, PropType } from 'vue';


const DozerContext = Symbol() as InjectionKey<ReturnType<typeof useDozerClient> | null>;

const DozerProvider = defineComponent({
  name: 'dozer-provider',
  props: {
    value: Object as PropType<DozerClientOptions>,
  },
  setup(props, { slots }) {
    const value = useDozerClient(props.value);
    provide(DozerContext, value);
    return () => slots.default?.();
  }
})

const DozerConsumer = () => {
  const value = inject(DozerContext);
  if (!value) {
    throw new Error('DozerConsumer must be used within a DozerProvider.');
  }
  return value;
}

export { DozerConsumer, DozerProvider };
