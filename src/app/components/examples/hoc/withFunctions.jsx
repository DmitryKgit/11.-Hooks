import React from "react";

const withFunctions = (Component, Wrapper) => () => {
  const isAuth = localStorage.getItem("isAuth");

  const handleLogin = () => {
    localStorage.setItem("isAuth", "token");
  };

  const handleLogOut = () => {
    localStorage.removeItem("isAuth");
  };

  return (
    <Wrapper>
      <Component
        onLogin={handleLogin}
        onLogOut={handleLogOut}
        isAuth={isAuth}
      />
    </Wrapper>
  );
};

export default withFunctions;
