import React, { useState, useEffect } from "react";

const GitUsers = () => {
  const url = "https://api.github.com/users";
  const [users, setUser] = useState([]);

  const getUser = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUser(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h2>git hub users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}> profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GitUsers;
