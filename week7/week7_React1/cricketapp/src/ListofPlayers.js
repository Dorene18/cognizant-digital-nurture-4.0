import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Gill", score: 45 },
    { name: "Dhoni", score: 100 },
    { name: "Jadeja", score: 67 },
    { name: "Kohli", score: 32 },
    { name: "Pandya", score: 76 },
    { name: "Ashwin", score: 22 },
    { name: "Bumrah", score: 89 },
    { name: "Shami", score: 71 },
    { name: "Surya", score: 55 },
  ];

  // Using arrow function to filter scores < 70
  const filtered = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with Score &lt; 70</h3>
      <ul>
        {filtered.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
