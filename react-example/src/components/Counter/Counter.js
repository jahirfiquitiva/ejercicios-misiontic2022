import { useState, useMemo } from 'react';
import './Counter.css';

const getCounterClassName = (count) => {
  if (count >= 20) return 'mayor-igual-a-cien'; // 20 - ...
  if (count >= 10) return 'menor-que-setenta'; // 10 - 19
  return 'menor-que-treinta'; // -infity - 9
};

const decrement = (count, setCount) => {
  setCount(count - 1);
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const className = useMemo(() => {
    return getCounterClassName(count)
  }, [count])

  return (
    <div>
      <p className={className}>Count: {count}</p>
      {/* Conditional Rendering */}
      {count >= 20 ? <p>Ganaste!</p> : <></>}
      <input
        type={'checkbox'}
        checked={show}
        onChange={(event) => {
          // show = true  .... false
          // show = false  .... true
          setShow(!show);
        }}
      />
      {show && <p>Details: Jahir Fiquitiva</p>}
      <button
        onClick={() => {
          decrement(count, setCount);
        }}>
        Decrementar
      </button>
      <button onClick={increment}>Incrementar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};

export default Counter;
