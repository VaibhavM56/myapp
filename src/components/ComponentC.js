import React, { useState } from "react";

function ComponentC() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const updateUsername = (event) => {
    console.log(event.target.value);

    setUser({
      ...user,
      userName: event.target.value,
    });
  };

  const updatePassword = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };

  const login = (event) => {
    event.preventDefault(); //to handle default behaviour of form, like to prevent refresh
  };

  return (
    <div>
      <form>
        Username:
        <input
          type="text"
          onChange={updateUsername}
          value={user.userName}
          placeholder="username"
        />
        Password:
        <input
          type="text"
          onChange={updatePassword}
          value={user.password}
          placeholder="password"
        />
        <button onClick={login}>submit</button>
        <p>{user.userName}</p>
        <p>{user.password}</p>
      </form>
    </div>
  );
}

export default ComponentC;
