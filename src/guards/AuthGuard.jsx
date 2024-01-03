import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, roles }) => {
  const currentUser = useSelector((state) => state.user);
  const authorize = () => {
    //인증된 유저가 아니면 401
    if (!currentUser) {
      return <Navigate to="/401" />;
    }
    //유저의 권한이 props 권한과 같은게 없을 경우 401
    if (roles?.indexOf(currentUser.role) === -1) {
      return <Navigate to="401" />;
    }
    //정상접근
    return children;
  };

  return authorize();
};

export default AuthGuard;
