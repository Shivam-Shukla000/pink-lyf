import { Box, Flex, Button } from "@chakra-ui/react";
import parivar from "../../public/image.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const pbg = "#F69AC2";
  const sbg = "#FFE8D3";
  return (
    <Flex flexDirection={"column"} align={"center"}>
      <Flex padding={"40px"} bg={pbg} maxWidth={"50%"} marginTop={"50px"}>
        <Flex
          marginX={"20px"}
          align={"start"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Flex flexDirection={"column"} marginTop={"5px"} align={"start"}>
            <Flex fontWeight={"smeiBold"} fontSize={"32px"}>
              Pink Lyf Vol.2
              <Box fontSize={"10px"}>TM</Box>
            </Flex>
            <Flex
              marginTop={"20px"}
              fontSize={"18px"}
              textAlign={"start"}
              maxWidth={"550px"}
              wrap={"wrap"}
            >
              We are back wit vol.2 of amaziong ping life magazine Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Mollitia odit natus
              debitis dicta voluptate nostrum ipsum placeat odio consequuntur
              aperiam? quod.
            </Flex>
          </Flex>
          <Button
            marginBottom={"10px"}
            bg={"#F46B2F"}
            border={"1px solid black"}
            padding={"25px"}
            fontSize={"28px"}
            textColor={"white"}
            _hover={{ bg: "black" }}
            shadow={"6px 6px 1px 0px rgba(0, 0, 0, .4)"}
            onClick={() => {
              navigate("./magazines");
            }}
          >
            Read Vol.2
          </Button>
        </Flex>
        <Box shadow={"12px 12px 2px 1px rgba(0, 0, 0, .4)"}>
          <img width={"400px"} src={parivar} alt="" />
        </Box>
      </Flex>
    </Flex>
  );
}
