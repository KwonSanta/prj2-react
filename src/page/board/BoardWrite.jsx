import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function BoardWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  function handleWriteClick() {
    axios
      .post("api/board/write", { title, content, writer })
      .then((res) => {
        toast({
          status: "success",
          description: "새 글이 등록되었습니다.",
          position: "top",
        });
        navigate("/");
      })
      .catch((err) => {
        const code = err.response.status;

        if (code === 400) {
          toast({
            status: "error",
            description: "등록되지 않았습니다. 입력한 내용을 확인하세요.",
            position: "top",
          });
        }
      })
      .finally(() => {});
  }

  let checkBlack = false;
  if (
    title.trim().length === 0 ||
    content.trim().length === 0 ||
    writer.trim().length === 0
  ) {
    checkBlack = true;
  }

  return (
    <Box>
      <Box>글 작성 화면</Box>
      <Box>
        <FormControl>
          <FormLabel>제목</FormLabel>
          <Input onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>본문</FormLabel>
          <Textarea onChange={(e) => setContent(e.target.value)} />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>작성자</FormLabel>
          <Input onChange={(e) => setWriter(e.target.value)} />
        </FormControl>
      </Box>
      <Box>
        <Button
          isDisabled={checkBlack}
          onClick={handleWriteClick}
          colorScheme={"blue"}
        >
          저장
        </Button>
      </Box>
    </Box>
  );
}
