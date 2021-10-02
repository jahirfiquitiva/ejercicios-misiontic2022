import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../AppContext/AppContext';
import { Link } from 'react-router-dom';
import './Form.css';
// PropTypes

const Form = (props) => {
  const datos = useContext(AppContext);
  const [valorTarea, cambiarValorDeTarea] = useState('');
  const [valorFecha, cambiarValorDeFecha] = useState('2021-09-29');

  const buttonClick = () => {
    const newTask = {
      task: valorTarea,
      due: new Date(valorFecha),
      done: false,
    };
    datos.setTasks([...datos.tasks, newTask]);
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
      <br />
      <br />
      <Link className={'button'} to={'/tasks'}>
        Ver tareas
      </Link>
    </form>
  );
};

Form.propTypes = {
  // PropTypes.string
  // PropTypes.bool;
  // PropTypes.number;
  createTask: PropTypes.func, // createTask => function
};

export default Form;
