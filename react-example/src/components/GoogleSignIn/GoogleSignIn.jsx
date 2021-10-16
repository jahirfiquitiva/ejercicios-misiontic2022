import { useState, useEffect } from 'react';
import { httpPost } from '../../utils/fetch';

const getToken = () => {
  return window ? localStorage.getItem('token') : '';
};

const GoogleSignIn = () => {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);

  const handleGoogleSignIn = async (res) => {
    if (!res.clientId || !res.credential) return;

    const response = await httpPost(`${process.env.REACT_APP_BACKEND_URL}/users/auth/google`, {
      headers: {
        'misiontic-auth-user': res.credential,
      },
      body: '',
    });
    localStorage.setItem('token', response.token);
    localStorage.setItem('email', response.email);
    window.location.reload();
  };

  const logOut = () => {
    window.google.accounts.id.revoke(localStorage.getItem('email'), (complete) => {
      localStorage.clear();
      window.location.reload();
    });
  };

  useEffect(() => {
    if (gsiScriptLoaded) return;
    const initializeGsi = () => {
      if (!window.google || gsiScriptLoaded) return;

      setGsiScriptLoaded(true);
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogleSignIn,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large' } // customization attributes
      );
    };

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = initializeGsi;
    script.async = true;
    script.id = 'google-client-script';
    document.body.appendChild(script);

    return () => {
      window.google?.accounts.id.cancel();
    };
  }, [gsiScriptLoaded]);

  if (getToken()) {
    return <button onClick={logOut}>Cerrar sesión</button>;
  }

  return (
    <>
      <div
        id='g_id_onload'
        data-client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        data-auto_prompt='false'></div>
      <div
        id={'buttonDiv'}
        className='g_id_signin'
        data-type='standard'
        data-size='large'
        data-theme='outline'
        data-text='sign_in_with'
        data-shape='rectangular'
        data-logo_alignment='left'></div>
    </>
  );
};

export default GoogleSignIn;
