import { input, inputWrapperStyle, icons } from "@/styles/modalLogin.css";
import { Button } from "./Button";

export const LoginModal = () => (
  <div className={`flex flex-col  gap-4 border-2`}>
    <div className="flex items-center gap-2">
      <svg width="7" height="31" viewBox="0 0 7 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="7" height="31" fill="#35BDAC" />
      </svg>
      <h1 className="text-xlarge font-bold">Entrar</h1>
    </div>
    <div className={inputWrapperStyle}>
      <input className={input} placeholder="Email" />
      <svg className={icons} width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM10 9L2 4V14H18V4L10 9Z"
          fill="black"
          fillOpacity="0.36"
        />
      </svg>
    </div>
    <div className={inputWrapperStyle}>
      <input className={input} placeholder="Senha" />
      <svg className={icons} width="20" height="16" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 7.5H14C15.1 7.5 16 8.4 16 9.5V19.5C16 20.6 15.1 21.5 14 21.5H2C0.9 21.5 0 20.6 0 19.5V9.5C0 8.4 0.9 7.5 2 7.5H3V5.5C3 2.74 5.24 0.5 8 0.5C10.76 0.5 13 2.74 13 5.5V7.5ZM8 2.5C6.34 2.5 5 3.84 5 5.5V7.5H11V5.5C11 3.84 9.66 2.5 8 2.5ZM2 19.5V9.5H14V19.5H2ZM10 14.5C10 15.6 9.1 16.5 8 16.5C6.9 16.5 6 15.6 6 14.5C6 13.4 6.9 12.5 8 12.5C9.1 12.5 10 13.4 10 14.5Z"
          fill="black"
          fillOpacity="0.36"
        />
      </svg>
    </div>
    <a className=""> Esqueceu sua senha?</a>
    <Button label="Entrar" size="large" />
    <span>
      {" "}
      Ainda nao tem uma conta? <a> Cadastre-se</a>
    </span>
  </div>
);
