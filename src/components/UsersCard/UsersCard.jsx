import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";
import LikeButton from "../LikeButton/LikeButton";

const UsersCard = () => {
  const { usuariosCadastrados } = useContext(FormContext);

  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      {Object.values(usuariosCadastrados).map((usuario, index) => (
        <div key={index} className="card mx-4 mb-3" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{usuario.nickname}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Idade: {usuario.age}</li>
            <li className="list-group-item">E-mail: {usuario.email}</li>
          </ul>
          <div className="card-body d-flex justify-content-between">
            <LikeButton />
            <a href="#" className="card-link">
            <i className="fa-solid fa-user-pen"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersCard;
