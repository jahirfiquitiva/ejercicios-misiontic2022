import { useState } from 'react';

// Hooks

const Form = (props) => {
  const { createTask } = props;
  const [valorTarea, cambiarValorDeTarea] = useState('');
  const [valorFecha, cambiarValorDeFecha] = useState('2021-09-29');

  const buttonClick = () => {
    console.log(valorTarea);
    createTask(valorTarea, valorFecha);
    // fetch() -> url 
  };

  return (
    <form>
      <div>
        <label for={'task'}>Tarea</label>
        <input
          type={'text'}
          name={'task'}
          value={valorTarea}
          onChange={(event) => {
            cambiarValorDeTarea(event.target.value);
          }}
        />
      </div>
      <div>
        <label for={'task-date'}>Fecha</label>
        <input
          type={'date'}
          name={'task-date'}
          value={valorFecha}
          onChange={(event) => {
            cambiarValorDeFecha(event.target.value);
          }}
        />
      </div>
      <button type={'button'} onClick={buttonClick}>
        Crear tarea
      </button>
    </form>
  );
};

export default Form;
