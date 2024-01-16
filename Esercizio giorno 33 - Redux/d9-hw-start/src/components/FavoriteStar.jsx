import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCompany, deleteCompany } from "../actions/actions";

export default function FavoriteStar(data) {
  const dispatch = useDispatch();
  const [isFilled, setIsFilled] = useState(false);

  return (
    <i
      className={`bi bi-star cursor-pointer ${isFilled ? "filled" : ""}`}
      onClick={() => {
        dispatch(
          data.data.isFavorite
            ? deleteCompany(data.data)
            : addCompany(data.data)
        );
        setIsFilled(!isFilled);
      }}
    ></i>
  );
}
