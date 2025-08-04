import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { mes: 'Enero', ventas: 2400 },
  { mes: 'Febrero', ventas: 1398 },
  { mes: 'Marzo', ventas: 9800 },
  { mes: 'Abril', ventas: 3908 },
  { mes: 'Mayo', ventas: 4800 },
  { mes: 'Junio', ventas: 3800 },
];

function Dashboard() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Resumen de Ventas Mensuales</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ventas" fill="#2784e2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;
