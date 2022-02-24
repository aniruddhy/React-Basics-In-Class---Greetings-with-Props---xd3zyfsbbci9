import React from "react";

const Welcome = ({ name }) => {
  let sayhi = `Hey ${name}!`;
  let greetMessage = `Welcome to Newton School.`;
  return (
    <>
      <h1>{sayhi}</h1>
      <h2>{greetMessage}</h2>
    </>
  );
};
export default Welcome;
