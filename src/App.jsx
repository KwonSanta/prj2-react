import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home.jsx";
import { BoardWrite } from "./page/board/BoardWrite.jsx";
import { BoardList } from "./page/board/BoardList.jsx";
import { BoardView } from "./page/board/BoardView.jsx";
import { BoardEdit } from "./page/board/BoardEdit.jsx";
import { MemberSignUp } from "./page/member/MemberSignUp.jsx";
import { MemberList } from "./page/member/MemberList.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, // /write request 시 <Home /> 이 보임
      children: [
        {
          index: true, // 서브 경로가 없을 때의 경로
          element: <BoardList />,
        },
        { path: "write", element: <BoardWrite /> },
        { path: "board/:id", element: <BoardView /> },
        { path: "edit/:id", element: <BoardEdit /> },
        { path: "signup", element: <MemberSignUp /> },
        { path: "member/list", element: <MemberList /> },
      ], // <Outlet />
    },
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
