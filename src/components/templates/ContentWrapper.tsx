import { Container } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ContentWrapper: React.FC<IProps> = ({ children }) => {
  return <Container maxWidth="xl">{children}</Container>;
};

export default ContentWrapper;
