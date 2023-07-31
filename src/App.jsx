import React from "react";
import { BigImg } from "./assets/BigImg/BigImg";
import { NavBar } from "./assets/NavBar/NavBar";
import { Container } from "./assets/Container/Container";

function App() {
  return (
    <>
      <div className="">
        <NavBar />
        <BigImg />
        <Container />
      </div>
    </>
  );
}

export default App;
