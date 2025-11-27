import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "./LoginRegister.css";
import Swal from "sweetalert2";

export function LoginRegister() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [isActive, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleRegisterChange = (e) =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  // ✅ LOGIN
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/usuarios/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("usuario", JSON.stringify(result));

        Swal.fire({
          title: `¡Bienvenido ${result.nombre || "usuario"}! 👋`,
          text: "Inicio de sesión exitoso.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ir al inicio",
        }).then(() => {
          navigate("/inicio");
        });
      } else {
        Swal.fire({
          title: "Error en el login",
          text: result.message || "Credenciales incorrectas.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error de conexión",
        text: "No se pudo conectar con el servidor.",
        icon: "warning",
      });
    }
  };

  // ✅ REGISTRO
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/usuarios/registro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "¡Registro exitoso! 🎉",
          text: "Tu cuenta ha sido creada correctamente.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ir al login",
        }).then(() => {
          setIsActive(false);
        });
      } else {
        Swal.fire({
          title: "Error en el registro",
          text: result.message || "Datos incorrectos.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      }
    } catch {
      Swal.fire({
        title: "Error de conexión",
        text: "No se pudo conectar con el servidor.",
        icon: "warning",
      });
    }
  };

  return (
    <div className="login-page">
      <div className={`container ${isActive ? "active" : ""}`}>
        {/* LOGIN */}
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>

        {/* REGISTRO */}
        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>

            <div className="input-box">
              <input
                type="text"
                name="nombre"
                placeholder="Name"
                value={registerData.nombre}
                onChange={handleRegisterChange}
                required
              />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
              <i className="bx bxs-envelope"></i>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button type="submit" className="btn">
              Register
            </button>
          </form>
        </div>

        {/* TOGGLE */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={handleRegisterClick}>
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
