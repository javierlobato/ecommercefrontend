import  { useState, useEffect } from 'react';
import axios from '../axios'; // Importa la instancia de axios

function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Hacer la solicitud cuando el componente se monte
  useEffect(() => {
    axios.get('hello/')  // Esta es la URL de tu API Django
      .then(response => {
        setData(response.data.message);
      })
      .catch(() => {
        setError('Hubo un error al obtener los datos.');
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data ? <h1>{data}</h1> : <p>Cargando...</p>}
    </div>
  );
}

export default Home;
