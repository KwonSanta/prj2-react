import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function MemberSignup() {
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [nickName, setNickName] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  let isCheckedRequiredInput = false;
  if (email === null || email.length === 0) {
    isCheckedRequiredInput = true;
  }
  if (firstPassword === null || firstPassword.length === 0) {
    isCheckedRequiredInput = true;
  }
  if (firstPassword !== secondPassword) {
    isCheckedRequiredInput = true;
  }
  if (nickName === null || nickName.length === 0) {
    isCheckedRequiredInput = true;
  }

  // useEffect(() => {}, []);

  function handleRegisterClick() {
    axios
      .post(`api/member/signup`, {
        email,
        password: firstPassword,
        nickName,
      })
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        navigate(`/signup`);
      });
  }

  return (
    <Box>
      <Box>회원가입 페이지</Box>
      <Box>
        <FormControl>
          <FormLabel>이메일</FormLabel>
          <InputGroup>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              type={"email"}
            />
            <InputRightElement w={"auto"} mr={1}>
              <Button size={"sm"}>중복확인</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>비밀번호</FormLabel>
          <Input
            value={firstPassword}
            onChange={(e) => setFirstPassword(e.target.value.trim())}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>비밀번호 확인</FormLabel>
          <Input
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value.trim())}
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>닉네임</FormLabel>
          <InputGroup>
            <Input
              value={nickName}
              onChange={(e) => setNickName(e.target.value.trim())}
            />
            <InputRightElement w={"auto"} mr={1}>
              <Button size={"sm"}>중복확인</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Box>
      <Box>
        <Button
          isDisabled={isCheckedRequiredInput}
          onClick={onOpen}
          colorScheme={"blue"}
        >
          등록
        </Button>
      </Box>
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalBody>등록하시겠습니까?</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>취소</Button>
              <Button onClick={handleRegisterClick} colorScheme={"blue"}>
                확인
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}
