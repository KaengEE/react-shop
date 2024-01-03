import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { loginService } from "../../services/auth.service";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { setCurrentUser } from "../../store/actions/user";

const Login = () => {
  const [user, setUser] = useState(new User("", "", ""));
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    //시작시 유저아이디가 있으면 profile로 이동
    if (currentUser?.id) navigate("/profile");
  }, []);

  //입력메서드
  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //로그인메서드 submit
  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!user.username || !user.password) {
      return;
    }

    setLoading(true);

    loginService(user)
      .then((response) => {
        //setCurrentUser로 만든 액션을 유저 리듀서에 전달
        dispatch(setCurrentUser(response.data));
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("유저네임 또는 패스워드가 틀립니다.");
        setLoading(false);
      });

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="ms-auto me-auto user-icon"
        />

        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}

        <form
          onSubmit={handleLogin}
          noValidate
          className={submitted ? "was-validated" : ""}
        >
          <div className="form-group my-2">
            <label htmlFor="username">유저이름</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
              value={user.username}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">유저네임을 입력해주세요</div>
          </div>

          <div className="form-group my-2">
            <label htmlFor="password">패스워드</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">패스워드를 입력해주세요</div>
          </div>

          <button
            className="btn btn-info text-white w-100 mt-3"
            disabled={loading}
          >
            로그인
          </button>
        </form>

        <Link
          to="/register"
          className="btn btn-link"
          style={{ color: "darkgray" }}
        >
          새 계정 만들기
        </Link>
      </div>
    </div>
  );
};

export default Login;
