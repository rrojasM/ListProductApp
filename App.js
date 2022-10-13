import React, { useEffect, useState } from 'react';
import Config from 'react-native-config';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Routes from './Routes';

export const UserContext = React.createContext();

GoogleSignin.configure();
const WEB_CLIENT_ID = '348967126421-1h1jimmnacped0v23cihlhi8b4b5agl4.apps.googleusercontent.com';

const App = () => {
  const [user, setUser] = useState();


  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
    });

  }, [])


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes />
    </UserContext.Provider>



  );
};

export default App;


