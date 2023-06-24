import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext/FormContext";

const UsersCard = () => {
    const { formData } = useContext(FormContext);

    return (
        <div className="card mx-5 mt-5" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{formData.nickname}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{formData.age}</li>
                <li className="list-group-item">{formData.email}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">
                like
                </a>
                <a href="#" className="card-link">
                edit
                </a>
            </div>
        </div>
    );
};

export default UsersCard;
