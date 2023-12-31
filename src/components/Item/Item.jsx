
import { Link } from "react-router-dom";

export const Item = ({id, name, img, description }) => {
  return (
    <div className="border m-2">
      <div className="card c_b_bg">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <img src={img} width="90" alt="" />
          <p className="card-text"> {description} </p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-outline-success detail_bg">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
