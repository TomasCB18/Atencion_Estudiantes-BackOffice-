import React, { useState } from 'react';
import './Formulario.css';

export function Formulario({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); 
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '' || role.trim() === '') {
      setError(true);
      return;
    }

    if ((username === 'directora' && password === 'directora' && role==='directora') || (username === 'secretaria' && password === 'secretaria' && role==='secretaria')) {
      setError(false);
      setUser({ username, role }); 
    } else {
      setError(true);
    }
  };

  return (
    <section>
      <h1>Uach funcionarios</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Seleccionar Rol</option>
          <option value="directora">Directora</option>
          <option value="secretaria">Secretaria</option>
        </select>
        <button>Iniciar sesión</button>
      </form>

      {error && <p>Usuario, contraseña o rol incorrectos</p>}
    </section>
  );
}

export default Formulario;
