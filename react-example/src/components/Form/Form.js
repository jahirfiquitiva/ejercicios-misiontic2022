import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { httpPost } from '../../utils/fetch';
import './Form.css';
// PropTypes

const Form = (props) => {
  const [valorTarea, cambiarValorDeTarea] = useState('');
  const [valorFecha, cambiarValorDeFecha] = useState('2021-09-29');
  const [tareaCreada, setTareaCreada] = useState(false);

  const buttonClick = async () => {
    const newTask = {
      task: valorTarea,
      due: valorFecha,
      done: false,
    };
    
    const createdTask = await httpPost(`${process.env.REACT_APP_BACKEND_URL}/tasks`, {
      body: JSON.stringify(newTask),
    });
    if (createdTask._id) {
      setTareaCreada(true);
      setTimeout(() => {
        setTareaCreada(false);
      }, 3000)
    }
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
      {tareaCreada && (
        <p>Tarea creada exitosamente!</p>
      )}
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
