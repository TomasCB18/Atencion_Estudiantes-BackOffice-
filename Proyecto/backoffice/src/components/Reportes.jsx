import React, { useState, useEffect } from 'react';
import './Reportes.css';

const Reportes = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    const storedReportes = localStorage.getItem('reportes');
    if (storedReportes) {
      setReportes(JSON.parse(storedReportes));
    }
  }, []);

  const handleAgregarReporte = () => {
    if (titulo.trim() === '' || descripcion.trim() === '') {
      alert('Por favor, ingresa tanto el título como la descripción del error.');
      return;
    }

    const nuevoReporte = { titulo, descripcion, fecha: new Date().toLocaleString() };
    const nuevosReportes = [...reportes, nuevoReporte];

    setReportes(nuevosReportes);
    localStorage.setItem('reportes', JSON.stringify(nuevosReportes));

    setTitulo('');
    setDescripcion('');
  };

  const handleEliminarReporte = (index) => {
    const nuevosReportes = reportes.filter((_, i) => i !== index);

    setReportes(nuevosReportes);
    localStorage.setItem('reportes', JSON.stringify(nuevosReportes));
  };

  return (
    <div className="reportes-container">
      <h2 className="reportes-header">Reportes de Errores</h2>

      <div className="reportes-form">
        <label>Título:</label>
        <input
          type="text"
          className="input-field"
          placeholder="Título del error"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Descripción:</label>
        <textarea
          className="input-field"
          placeholder="Descripción detallada del error"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button className="agregar-reporte-button" onClick={handleAgregarReporte}>
          Agregar Reporte
        </button>
      </div>

      <ul className="reportes-list">
        {reportes.map((reporte, index) => (
          <li key={index} className="reporte-item">
            <div>
              <h3>{reporte.titulo}</h3>
              <p>{reporte.descripcion}</p>
              <p className="fecha">{reporte.fecha}</p>
            </div>
            <button onClick={() => handleEliminarReporte(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reportes;
