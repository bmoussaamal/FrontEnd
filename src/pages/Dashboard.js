import React, { useState } from 'react';
import { checkIP } from '../services/authService';

function Dashboard() {
  const [ip, setIp] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckIP = async () => {
    if (!ip.trim()) {
      setError("Veuillez entrer une adresse IP.");
      return;
    }
    setLoading(true);
    setError('');
    setResult('');

    try {
      const res = await checkIP(ip);
      setResult(res.data.authorized ? "✅ IP autorisée" : "❌ IP non autorisée");
    } catch (err) {
      setError("Erreur lors de la vérification");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard Admin - Vérification d'IP</h2>
      <input type="text" placeholder="Entrez une adresse IP" value={ip} onChange={(e) => setIp(e.target.value)} />
      <button onClick={handleCheckIP} disabled={loading}>
        {loading ? "Vérification..." : "Vérifier"}
      </button>
      {result && <p style={{ color: result.includes('✅') ? 'green' : 'red' }}>{result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Dashboard;
