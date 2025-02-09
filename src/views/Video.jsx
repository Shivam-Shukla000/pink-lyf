import { Box, Flex, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
export default function Video() {
  const link1 = "https://www.youtube.com/embed/R0E5Q8AaXMQ";
  const password = "parth";
  const [displayState1, setDisplatState1] = useState("");
  const [displayState2, setDisplatState2] = useState("");
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    setDisplatState1("flex");
    setDisplatState2("none");
  }, []);

  function handleValidate() {
    if (input == password) {
      setDisplatState1("none");
      setDisplatState2("flex");
    } else {
      setMessage("invalid password");
    }
  }

  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        display={displayState1}
        // width={"100%"}
        height={"100%"}
      >
        <Input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          margin={"0"}
          marginLeft={"auto"}
          marginRight={"auto"}
          value={input}
          placeholder="Enter Password"
          maxWidth={"300px"}
          bg={"white"}
        ></Input>
        <Box>{message}</Box>
        <Button
          boxSize={"fit-content"}
          bg={"#F46B2F"}
          marginLeft={"auto"}
          marginRight={"auto"}
          border={"1px solid black"}
          padding={"10px 15px 10px 15px"}
          maxWidth={"200px"}
          fontSize={"20px"}
          textColor={"white"}
          _hover={{ bg: "black" }}
          onClick={handleValidate}
        >
          Validate
        </Button>
      </Flex>
      <Flex
        marginTop={"3%"}
        display={displayState2}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <iframe
          width="1273"
          height="716"
          src={link1}
          title="Pink Life 2024 compilation"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Flex>
    </>
  );
}
