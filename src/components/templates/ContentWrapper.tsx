import { Container } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ContentWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4, lg: 5 } }}>
      {children}
    </Container>
  );
};

export default ContentWrapper;
