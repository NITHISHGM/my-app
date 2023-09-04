import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import { SyncOutlined } from "@ant-design/icons";

const Content = ({ user, getUser, loading }) => {
  // props logic
  //   const {
  //     email,
  //     name: { title, first, last },
  //   } = user[0];

  // getting user data from localStorage
  // const userDataString = localStorage.getItem("user");
  // const userData = JSON.parse(userDataString);
  // Destructure user data
  const {
    email,
    name: { title, first, last },
    dob: { date },
    location: {
      city,
      state,
      country,
      postcode,
      coordinates: { latitude, longitude },
    },
    picture: { large },
  } = user[0];

  return (
    <>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
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
              <div className="loader">Fetching User...</div>
            ) : (
              <>
                <Row>
                  <Col span={12} className="text-center user-address">
                    <Avatar size={200} src={large} />
                    <div className="name">{`${title}. ${first} ${last}`}</div>
                    <div>{email}</div>
                    <div>{date}</div>
                  </Col>
                  <Col span={12}>
                    <div className="head-title">Address</div>
                    <Row className="user-address">
                      <Col span={12}>
                        <div className="label">City : </div>
                      </Col>
                      <Col span={12}>
                        <div className="value">{city}</div>
                      </Col>
                      <Col span={12}>
                        <div className="label">State : </div>
                      </Col>
                      <Col span={12}>
                        <div className="value">{state}</div>
                      </Col>
                      <Col span={12}>
                        {" "}
                        <div className="label">Country : </div>
                      </Col>
                      <Col span={12}>
                        <div className="value">{country}</div>
                      </Col>
                      <Col span={12}>
                        <div className="label">Post code : </div>
                      </Col>
                      <Col span={12}>
                        <div className="value">{postcode}</div>
                      </Col>
                      <Col span={24} className="text-center">
                        <div>
                          <span className="label">lat : {latitude} </span>
                          <span className="label">lang : {longitude}</span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </>
            )}
          </Card>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default Content;
