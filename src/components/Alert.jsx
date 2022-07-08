import React from "react";
import { Alert, AlertTitle } from "@chakra-ui/react";
const Alert = ({ status, icon, msg }) => {
  return (
    <Alert status={`${status ? status : "info"}`}>
      {icon}
      <AlertTitle ml={10}>{msg}</AlertTitle>
    </Alert>
  );
};

export default Alert;
