import React, { useState } from 'react';
import axios from 'axios';

const IPChecker = () => {
  const [ip, setIP] = useState('');
  const [result, setResult] = useState('');

  const checkIP = async () => {
    const token = localStorage.getItem('token');
    try {const res = await axios.post('http://localhost:3000/api/ip/check', { ip }, {
  headers: { Authorization: 'Bearer ' + token }
});

     //const res = await axios.post('C:\Users\lenovo\Desktop\Amal', { ip }, {
        //headers: { Authorization: token }
     
      setResult(res.data.authorized ? 'IP autorisée' : 'IP non autorisée');
    } catch (err) {
      setResult('Erreur lors de la vérification');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Entrez l'adresse IP" onChange={(e) => setIP(e.target.value)} />
      <button onClick={checkIP}>Vérifier</button>
      <p>{result}</p>
    </div>
  );
};

export default IPChecker;
