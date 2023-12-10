import React, { useState, useEffect } from 'react';
import './App.css';
import { Formulario } from './components/Formulario.jsx';
import { Home } from './components/Home.jsx';
import uach from './imagen/uach.png';

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      {loading ? (
        <div>
          <p>Cargando...</p>
        </div>
      ) : (
        <>
          <div>
            <img src={uach} className="img-logo"/>
          </div>
          <div>
            {user.length === 0 ? <Formulario setUser={setUser} /> : <Home user={user} setUser={setUser} />}
          </div>
        </>
      )}
    </>
  );
}

export default App;
