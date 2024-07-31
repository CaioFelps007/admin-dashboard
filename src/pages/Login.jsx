import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLeft, setIsLeft] = useState(true);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleToggleClick = () => {
    setIsLeft(!isLeft);
  };

  return (
    <div className={`container ${isSignUp ? "active" : ""}`}>
      <div className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}>
        {isSignUp ? (
          <div className="form-sign-up">
            <h1> Crie sua Conta!</h1>
            <form>
              <span>Ou, use seu email para cadastro</span>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="CNPJ" />
              <input type="text" placeholder="Company Name" />
              <input type="password" placeholder="Password" />
              <input
                className="FilesChoose"
                type="file"
                placeholder="Escolher Imagem da Empresa"
              />

              <button className="buttonSignIn" type="button">
                Criar
              </button>
            </form>
          </div>
        ) : (
          <div className="form-sign-in">
            <h1 className="titleLogin"> Bem-vindo de volta!</h1>
            <form>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Senha" />
              <button type="button" className="buttonSignIn">
                Entrar
              </button>
            </form>
          </div>
        )}
      </div>

      <div className={`toggle-container ${isSignUp ? "active" : ""}`}>
        <div className={`toggle ${isSignUp ? "sign-up" : "sign-in"}`}>
          {isSignUp ? (
            <div class="toggle-panel toggle-left">
              <h1>Welcome Back</h1>
              <p>Entre na sua conta</p>

              <button className="hidden" id="login" onClick={handleSignInClick}>
                Login
              </button>
            </div>
          ) : (
            <div class="toggle-panel toggle-right">
              <h1>Hello, Friend</h1>
              <p>Faça seu Registro</p>
              <button
                className="hidden"
                id="cadastro"
                onClick={handleSignUpClick}
              >
                Cadastro
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
