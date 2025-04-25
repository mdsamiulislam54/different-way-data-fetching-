import React, { useEffect, useState } from "react";
import fetchData from "../../utilitis/getFetchData";
const SimpleFetch = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setUser(data);
    });
  }, []);
  return (
    <div>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SimpleFetch;
