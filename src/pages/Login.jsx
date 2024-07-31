import React, { Component } from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1> Crie sua Conta </h1>

          <div className="social-icons">
            <a href="#" className="icons">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icons">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="icons">
              <i className="fa-brands fa-github"></i>
            </a>
            <span>Ou, use seu email para cadastro</span>

            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Cadastre</button>
          </div>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back</h1>
            <p>Entre na sua conta</p>

            <button className="hidden" id="login">
              Login
            </button>
            <button className="hidden" id="login">
              Login
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend</h1>
            <p>Faça seu Registro</p>
            <button className="hidden" id="cadastro">
              Cadastro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
