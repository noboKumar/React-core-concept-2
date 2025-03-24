import { useEffect, useState } from "react";

export default function Player() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="box">
      <h2>Player Name: {players.length}</h2>
    </div>
  );
}
