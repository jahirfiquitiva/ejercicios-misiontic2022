import { useState, useEffect } from 'react';

const GoogleSignIn = () => {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);
  const [user, setUser] = useState(undefined);

  const handleGoogleSignIn = (res) => {
    if (!res.clientId || !res.credential) return;
    console.log(res.credential);

    // TODO: Enviar credential al backend
  };

  useEffect(() => {
    if (user?._id || gsiScriptLoaded) return;

    const initializeGsi = () => {
      console.log('Initialized GSI');
      // Typescript will complain about window.google
      // Add types to your `react-app-env.d.ts` or //@ts-ignore it.
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
      window.google.accounts.id.prompt();
    };

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = initializeGsi;
    script.async = true;
    script.id = 'google-client-script';
    document.body.appendChild(script);

    return () => {
      // Cleanup function that runs when component unmounts
      window.google?.accounts.id.cancel();
      // document.getElementById('google-client-script')?.remove();
    };
  }, [user?._id, gsiScriptLoaded]);

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
