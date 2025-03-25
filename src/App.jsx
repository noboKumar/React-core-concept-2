import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Users from "./user";
import { Suspense } from "react";
import Peoples from "./peoples";
import Player from "./player";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);

const fetchPeople = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

function App() {
  const peoplePromise = fetchPeople();

  function handleClick2() {
    alert("clicked-2");
  }
  function handleSum(num) {
    const sum = num + num;
    alert(sum);
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React-core-concept-part-2</h1>

      <button
        onClick={() => {
          alert("Clicked");
        }}
      >
        Click Me
      </button>
      <button onClick={handleClick2}>Click Me-2</button>
      <button
        onClick={() => {
          handleSum(8);
        }}
      >
        Click Me-3
      </button>
      <Counter></Counter>
      <Suspense fallback={<h1>loading...</h1>}>
        <Peoples peoplePromise={peoplePromise}></Peoples>
      </Suspense>

      <Suspense fallback={<h1>loading...</h1>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
      <Player></Player>
    </>
  );
}

export default App;
