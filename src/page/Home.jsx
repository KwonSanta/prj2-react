import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import React from "react";
import { Navbar } from "../component/Navbar.jsx";

export function Home() {
  return (
    <Box>
      <Navbar />
      <Box
        mx={{
          lg: 200,
          base: 0,
        }}
        mt={10}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
