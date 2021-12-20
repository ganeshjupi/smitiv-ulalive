import React, { useEffect, useState } from 'react';
import Commonlinks from './commonlinks';
import { registerForPushNotifications, startNotificationService } from './helpers/notificationHelper';
import "./assets/css/toastr.min.css"
require('dotenv').config();

function App() {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    async function fetchData() {
      let playerId = await startNotificationService();
      setInitialized(true);

      if (!playerId) {
        await registerForPushNotifications();
      }
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      {
        initialized ? <Commonlinks /> : <span />
      }

    </div>
  );
}

export default App;
