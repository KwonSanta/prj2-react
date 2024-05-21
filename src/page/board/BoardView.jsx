import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";

export function BoardView() {
  const { id } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    axios.get(`/api/board/${id}`).then((res) => setBoard(res.data));
  }, []);

  // useEffect 는 BoardView 컴포넌트가 마운트 끝나고 실행 시작되는데
  // 이 때 res.data 는 초기값인 null 인 상태라 에러가 발생하므로 아래의 코드 작성이 필요
  if (board === null) {
    return <Spinner />;
  }

  return (
    <Box>
      <Box>{board.id}번 게시물</Box>
      <Box>
        <Box>
          <FormControl>
            <FormLabel>제목</FormLabel>
            <Input value={board.title} readOnly />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>본문</FormLabel>
            <Textarea value={board.content} readOnly />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>작성자</FormLabel>
            <Input value={board.writer} readOnly />
          </FormControl>
        </Box>
        <Box>
          <FormControl>작성일시</FormControl>
          <Input type={"datetime-local"} value={board.inserted} readOnly />
        </Box>
      </Box>
    </Box>
  );
}
