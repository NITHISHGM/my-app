import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./component/Content";

const App = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api");
      setUser(response.data.results);
      localStorage.setItem("user", JSON.stringify(response.data.results));
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="content">
      <Content user={user} getUser={getUser} loading={loading} />
    </div>
  );
};

export default App;
