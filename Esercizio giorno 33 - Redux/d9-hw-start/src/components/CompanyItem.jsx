import React from "react";
import { ListGroup } from "react-bootstrap";

export default function CompanyItem({ data }) {
  return (
    <>
      <ListGroup.Item>{data.company_name}</ListGroup.Item>
    </>
  );
}
