import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { httpGet, httpPatch, httpPost } from '../../utils/fetch';
import './Form.css';
// PropTypes

const Form = (props) => {
  const { pathname } = window.location;
  const isForEdit = !pathname.includes('create');
  const params = useParams();
  const [valorTarea, cambiarValorDeTarea] = useState('');
  const [valorFecha, cambiarValorDeFecha] = useState('2021-09-29');
  const [tareaCreada, setTareaCreada] = useState(false);

  useEffect(() => {
    if (!params.id && isForEdit) {
      window.location.href = '/create';
      return;
    }
    const getTaskData = async () => {
      const taskData = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/tasks/${params.id}`);
      const task = taskData[0];
      cambiarValorDeTarea(task.task);
      cambiarValorDeFecha(task.due);
    };
    getTaskData();
  }, [isForEdit, params.id]);

  const buttonClick = async () => {
    const newTask = {
      task: valorTarea,
      due: valorFecha,
      done: false,
    };

    if (isForEdit) {
      const updatedTask = await httpPatch(`${process.env.REACT_APP_BACKEND_URL}/tasks/${params.id}`, {
        body: JSON.stringify(newTask),
      });
      console.log(updatedTask);
      if (updatedTask[0]._id) {
        setTareaCreada(true);
        setTimeout(() => {
          setTareaCreada(false);
        }, 3000);
      }
    } else {
      const createdTask = await httpPost(`${process.env.REACT_APP_BACKEND_URL}/tasks`, {
        body: JSON.stringify(newTask),
      });
      if (createdTask._id) {
        setTareaCreada(true);
        setTimeout(() => {
          setTareaCreada(false);
        }, 3000);
      }
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
        {isForEdit ? 'Editar' : 'Crear'} tarea
      </button>
      <br />
      <br />
      <Link className={'button'} to={'/tasks'}>
        Ver tareas
      </Link>
      {tareaCreada && (
        <p>{isForEdit ? 'Tarea actualizada exitosamente!' : 'Tarea creada exitosamente!'}</p>
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
