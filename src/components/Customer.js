import { React } from "react";
import App from "../App";

function Customer({ id, image, name, birthday, gender, job }) {
  return (
    <>
      <p>{id}</p>
      <img src={image} />
      <p>{name}</p>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </>
  );
}

export default Customer;
