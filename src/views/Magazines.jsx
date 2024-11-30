import { Flex, Box, Button } from "@chakra-ui/react";
import parivar from "../../public/image.png";
import volume1 from "../../public/volume1.png";

export default function Magazines() {
  const openPDF = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  const pbg = "#F69AC2";
  const sbg = "#FFE8D3";
  return (
    <Flex marginTop={"40px"} gap={"50px"} justifyContent={"center"}>
      <Flex align={"center"} gap={"20px"} flexDirection={"column"}>
        <Box shadow={"12px 12px 2px 1px rgba(0, 0, 0, .4)"}>
          <img width={"354px"} src={volume1} alt="" />
        </Box>
        <Button
          marginBottom={"10px"}
          bg={"#F46B2F"}
          border={"1px solid black"}
          padding={"25px"}
          fontSize={"28px"}
          textColor={"white"}
          _hover={{ bg: "black" }}
          shadow={"6px 6px 1px 0px rgba(0, 0, 0, .4)"}
          onClick={() => openPDF("/pdfs/vol1.pdf")}
        >
          Read Vol.1
        </Button>
      </Flex>
      <Flex align={"center"} gap={"20px"} flexDirection={"column"}>
        <Box shadow={"12px 12px 2px 1px rgba(0, 0, 0, .4)"}>
          <img width={"400px"} src={parivar} alt="" />
        </Box>
        <Button
          marginBottom={"10px"}
          bg={"#F46B2F"}
          border={"1px solid black"}
          padding={"25px"}
          fontSize={"28px"}
          textColor={"white"}
          _hover={{ bg: "black" }}
          shadow={"6px 6px 1px 0px rgba(0, 0, 0, .4)"}
        >
          Read Vol.2
        </Button>
      </Flex>
    </Flex>
  );
}
