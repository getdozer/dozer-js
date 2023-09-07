import { DozerClientOptions } from '@dozerjs/dozer/src';
import { ReactNode, createContext, useContext } from 'react';
import { useDozerClient } from './useDozerClient';



const DozerContext = createContext<ReturnType<typeof useDozerClient> | null>(null);


const DozerProvider = (props: { children: ReactNode; value?: DozerClientOptions }) => {
  const value = useDozerClient(props.value);
  return <DozerContext.Provider value={value}> {props.children} </DozerContext.Provider>;
};

const DozerConsumer = () => {
  const value = useContext(DozerContext);
  if (value === null) {
    throw new Error('DozerConsumer must be used within a DozerProvider.');
  }
  return value;
}

export { DozerConsumer, DozerProvider };
