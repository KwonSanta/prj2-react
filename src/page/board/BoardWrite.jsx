import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

export function BoardWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");

  function handleSaveClick() {
    axios.post("/api/board/add", {
      // json 형식의 data 가 넘어감
      title, // 변수명과 프로퍼티명이 같으면 하나만 작성
      content,
      writer,
    });
  }

  return (
    <Box>
      <Box>글 작성 화면</Box>
      <Box>
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
          <Button onClick={handleSaveClick} colorScheme={"blue"}>
            저장
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
