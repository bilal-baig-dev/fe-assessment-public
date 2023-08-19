import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/list-tasks");
  }, [navigate]);

  return <div></div>;
};

export default LandingPage;
