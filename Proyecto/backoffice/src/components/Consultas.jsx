import React, { useState, useEffect } from 'react';
import './Formulario.css';
import './Consultas.css';

const Consultas = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [respuestasAlmacenadas, setRespuestasAlmacenadas] = useState([]);

  useEffect(() => {
    const preguntasCargadas = [
      { id: 1, pregunta: 'Pregunta 1' },
      { id: 2, pregunta: 'Pregunta 2' },
    ];

    setPreguntas(preguntasCargadas);

    const storedRespuestas = localStorage.getItem('respuestasAlmacenadas');
    if (storedRespuestas) {
      setRespuestasAlmacenadas(JSON.parse(storedRespuestas));
    }
  }, []);

  const handlePreguntaChange = (e) => {
    setPreguntaSeleccionada(e.target.value);
  };

  const handleRespuestaChange = (e) => {
    setRespuesta(e.target.value);
  };

  const handleResponder = () => {
    if (!preguntaSeleccionada || !respuesta) {
      alert('Por favor, selecciona una pregunta y proporciona una respuesta.');
      return;
    }

    const nuevaRespuesta = { pregunta: preguntaSeleccionada, respuesta: respuesta };
    setRespuestasAlmacenadas((prevRespuestas) => [...prevRespuestas, nuevaRespuesta]);
  };

  useEffect(() => {
    localStorage.setItem('respuestasAlmacenadas', JSON.stringify(respuestasAlmacenadas));
  }, [respuestasAlmacenadas]);

  return (
    <div className="consultas-container">
      <h2>Gestión de Consultas</h2>

      <div>
        <label>
          Selecciona una pregunta:
          <select value={preguntaSeleccionada} onChange={handlePreguntaChange}>
            <option value="" disabled>Selecciona una pregunta</option>
            {preguntas.map((pregunta) => (
              <option key={pregunta.id} value={pregunta.pregunta}>
                {pregunta.pregunta}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Responder:
          <textarea value={respuesta} onChange={handleRespuestaChange}></textarea>
        </label>
      </div>

      <button className='usuarios-button' onClick={handleResponder}>
        Responder
      </button>

      <div>
        <h3>Respuestas almacenadas:</h3>
        <ul>
          {respuestasAlmacenadas.map((item, index) => (
            <li key={index}>
              <strong>Pregunta:</strong> {item.pregunta}, <strong>Respuesta:</strong> {item.respuesta}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Consultas;
