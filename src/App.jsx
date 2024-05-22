import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./page/Home.jsx";
import { BoadList } from "./page/board/BoadList.jsx";
import { BoardEdit } from "./page/board/BoardEdit.jsx";
import { MemberSignup } from "./page/member/MemberSignup.jsx";
import { MemberList } from "./page/member/MemberList.jsx";
import { MemberView } from "./page/member/MemberView.jsx";
import { MemberLogin } from "./page/member/MemberLogin.jsx";
import { BoardWrite } from "./page/board/BoardWrite.jsx";

function App(props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <BoadList />,
        },
        {
          path: "write",
          element: <BoardWrite />,
        },
        {
          path: "edit/:id",
          element: <BoardEdit />,
        },
        {
          path: "signup",
          element: <MemberSignup />,
        },
        {
          path: "login",
          element: <MemberLogin />,
        },
        {
          path: "member/list",
          element: <MemberList />,
        },
        {
          path: "member/:id",
          element: <MemberView />,
        },
      ],
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
