import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Estadisticas = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    //rempelazar esto con lo que nos despliegue la db
    const data = {
      labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
      datasets: [
        {
          label: 'Número de Solicitudes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: 'bar',
      data: data,
    };

    const myChart = new Chart(chartRef.current, config);

    return () => {
      myChart.destroy();
    };
  }, []); 

  return (
    <div>
      <h1>Estadísticas de Preguntas:</h1>
      <canvas ref={chartRef} width={400} height={200}></canvas>
    </div>
  );
};

export default Estadisticas;
