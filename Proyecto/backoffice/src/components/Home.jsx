import React, { useState } from 'react';
import './home.css';
import Reportes from './Reportes';
import Usuarios from './Usuarios';
import Consultas from './Consultas';
import Estadisticas from './Estadisticas';

export function Home({ user, setUser }) {
  const [currentAction, setCurrentAction] = useState(null);

  const handleLogout = () => {
    setUser([]);
  };

  const handleOptionClick = (option) => {
    switch (option) {
      case 'Consultas':
        setCurrentAction(<Consultas />);
        break;
      case 'Usuarios':
        setCurrentAction(<Usuarios />);
        break;
      case 'Reportes':
        setCurrentAction(<Reportes />);
        break;
      case 'Estadísticas':
        setCurrentAction(<Estadisticas />);
        break;
      default:
        setCurrentAction('Opción no reconocida');
    }
  };

  const handleBackClick = () => {
    setCurrentAction(null);
  };

  return (
    <div className="home-container">
      <div>
        <h1>Bienvenid@, {user.username}!</h1>
      </div>

      {currentAction && (
        <div className="selected-option">
          <button className="back-button" onClick={handleBackClick}>
            Volver atrás
          </button>
          <div>{currentAction}</div>
        </div>
      )}

      {!currentAction && (
        <div className="management-section">
          <h2>Gestión de Atención de Estudiantes</h2>

          <div className="management-options">
            <button className="management-option" onClick={() => handleOptionClick('Consultas')}>
              <h3>Gestión de Consultas</h3>
            </button>

            <button className="management-option" onClick={() => handleOptionClick('Usuarios')}>
              <h3>Gestión de estudiantes</h3>
            </button>

            <button className="management-option" onClick={() => handleOptionClick('Reportes')}>
              <h3>Reportes</h3>
            </button>

            <button className="management-option" onClick={() => handleOptionClick('Estadísticas')}>
              <h3>Estadísticas</h3>
            </button>
          </div>
        </div>
      )}

      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
