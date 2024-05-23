import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { LoginContext } from "../../component/LoginProvider.jsx";

export function BoardView() {
  // useParams 훅을 사용하여 URL 매개변수에서 id를 가져옵니다.
  const { id } = useParams();
  // board 상태를 null로 초기화합니다.
  const [board, setBoard] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const account = useContext(LoginContext);

  // useEffect 훅은 컴포넌트가 마운트된 후에 실행됩니다.
  useEffect(() => {
    // axios를 사용하여 API 요청을 보냅니다.
    // id를 URL에 포함시켜 해당 게시물 데이터를 가져옵니다.
    axios
      .get(`/api/board/${id}`)
      .then((res) => setBoard(res.data))
      .catch((err) => {
        if (err.response.status === 404) {
          toast({
            status: "info",
            description: "해당 게시물이 존재하지 않습니다.",
            position: "top",
          });
          navigate("/");
        }
      });
  }, []); // id가 변경될 때마다 useEffect가 다시 실행됩니다.

  function handleClickRemove() {
    axios
      .delete(`/api/board/${id}`)
      .then(() => {
        toast({
          status: "success",
          description: `${id}번 게시물이 삭제되었습니다.`,
          position: "top",
        });
        navigate("/");
      })
      .catch(() => {
        toast({
          status: "error",
          description: `${id}번 게시물 삭제 중 오류가 발생하였습니다.`,
          position: "top",
        });
      })
      .finally(() => {
        onClose();
      });
  }

  // useEffect 는 BoardView 컴포넌트가 마운트 끝나고 실행 시작되는데
  // 이 때 res.data 는 초기값인 null 인 상태라 에러가 발생하므로 아래의 코드 작성이 필요
  if (board === null) {
    // board가 null인 경우, 데이터를 아직 가져오지 못한 상태입니다.
    return <Spinner />; // 이 경우 로딩 스피너를 표시합니다.
  }

  // board가 null이 아니면 데이터를 성공적으로 가져온 상태입니다.

  // 이 경우 실제 게시물 내용을 표시합니다.
  return (
    <Box>
      <Box>
        <Box>{board.id}번 게시물</Box>
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
            <Input value={account.nickName} readOnly />
          </FormControl>
        </Box>
        <Box>
          <FormControl>작성일시</FormControl>
          <Input type={"datetime-local"} value={board.inserted} readOnly />
        </Box>
      </Box>
      <Box>
        <Button
          colorScheme={"purple"}
          onClick={() => navigate(`/edit/${board.id}`)}
        >
          수정
        </Button>
        <Button colorScheme={"red"} onClick={onOpen}>
          삭제
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalBody>삭제하시겠습니까?</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>취소</Button>
            <Button onClick={handleClickRemove} colorScheme={"red"}>
              확인
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
