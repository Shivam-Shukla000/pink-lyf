import { Box, Flex } from "@chakra-ui/react";
export default function Video() {
  const link1 = "https://www.youtube.com/embed/R0E5Q8AaXMQ";

  return (
    <>
      <Flex justifyContent={"center"} alignContent={"center"} marginTop={"3%"}>
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
