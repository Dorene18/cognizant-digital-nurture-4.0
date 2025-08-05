import React from 'react';

const IndianPlayers = () => {
  const allPlayers = ["Player1", "Player2", "Player3", "Player4", "Player5", "Player6"];

  // Using destructuring to separate players
  const [p1, p2, p3, p4, p5, p6] = allPlayers;
  const oddPlayers = [p1, p3, p5];
  const evenPlayers = [p2, p4, p6];

  // Merging T20 and Ranji Trophy players
  const T20 = ["Virat", "Rohit", "Bumrah"];
  const Ranji = ["Rahane", "Sundar", "Gill"];
  const merged = [...T20, ...Ranji];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>{oddPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Even Team Players</h2>
      <ul>{evenPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Merged T20 and Ranji Players</h2>
      <ul>{merged.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
