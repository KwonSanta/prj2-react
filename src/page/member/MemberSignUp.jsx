import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export function MemberSignUp() {
  return (
    <Box>
      <Box>회원가입</Box>
      <Box>
        <Box>
          <FormControl>
            <FormLabel>이메일</FormLabel>
            <Input onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>암호</FormLabel>
            <Input onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>별명</FormLabel>
            <Input onChange={(e) => set(e.target.value)} />
          </FormControl>
        </Box>
        <Box>
          <Button colorScheme={"blue"}>가입</Button>
        </Box>
      </Box>
    </Box>
  );
}
