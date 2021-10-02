import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextComponent = (props) => {
  const [tasks, setTasks] = useState([]);

  const objeto = {
    tasks,
    setTasks,
  };

  return <AppContext.Provider value={objeto}>{props.children}</AppContext.Provider>;
};

export default AppContextComponent;
