import { ListGroup } from "react-bootstrap";
import CompanyItem from "../components/CompanyItem";
import { useSelector } from "react-redux";

const FavouritesCompany = () => {
  const store = useSelector((state) => state);
  return (
    <ListGroup>
      {store.map((c) => (
        <CompanyItem key={c.company_name} data={c} />
      ))}
    </ListGroup>
  );
};

export default FavouritesCompany;
