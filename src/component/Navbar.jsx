import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <Flex gap={3}>
      <Box
        onClick={() => navigate("/")}
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
      >
        HOME
      </Box>
      <Box
        onClick={() => navigate("/board/write")}
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
      >
        글쓰기
      </Box>
      <Spacer />
      <Box
        onClick={() => navigate("member/list")}
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
      >
        회원목록
      </Box>
      <Box
        onClick={() => navigate("member/signup")}
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
      >
        회원가입
      </Box>
      <Box
        onClick={() => navigate("member/login")}
        cursor={"pointer"}
        _hover={{ bgColor: "gray.200" }}
      >
        로그인
      </Box>
    </Flex>
  );
}
