import { useEffect, useState } from 'react';
import { httpGet } from '../../utils/fetch';
import { getToken } from '../../utils/getToken';

const Role = () => {
  const [role, setRole] = useState('');

  const getUserRole = async () => {
    const token = getToken();
    const response = await httpGet(`${process.env.REACT_APP_BACKEND_URL}/users/me`, {
      headers: {
        'misiontic-auth-user': token,
      },
    });
    setRole(response.role);
  };

  useEffect(() => {
    getUserRole();
  }, []);

  if (!role) return <p>Verificando...</p>;

  if (role === 'PENDING') return <p>Contacte a un admin para que le otorgue permisos</p>;

  return <p>Bienvenido!</p>;
};

export default Role;
