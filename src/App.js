import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./component/Content";
import { Card, Row, Col } from "antd";
import { SyncOutlined } from "@ant-design/icons";

const App = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
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
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          {" "}
          <Card className="user-card" bodyStyle={{ height: "350px" }}>
            <div className="head-title">
              User Profile
              <span className="float-right">
                <button
                  className="btn cursor-pointer"
                  onClick={() => getUser()}
                  disabled={loading}
                >
                  <SyncOutlined /> Refresh
                </button>
              </span>
            </div>
            {loading ? (
              <>
                <div className="loader">Fetching User...</div>
              </>
            ) : (
              <>
                {" "}
                <Content user={user} getUser={getUser} loading={loading} />
              </>
            )}
          </Card>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
};

export default App;
