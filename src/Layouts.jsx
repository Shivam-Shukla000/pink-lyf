import { Box, Flex, Button } from "@chakra-ui/react";
import { transform } from "framer-motion";
import { Link, NavLink, Outlet } from "react-router-dom";

const Layouts = () => {
  const pbg = "#F69AC2";
  const sbg = "#FFE8D3";
  const activeStyle = {
    fontSize: "24px",
    backgroundColor: sbg,
    transform: "translate(0px, 1px)",
    border: "1px solid gray",
    borderBottom: "0px",
    padding: "5px 20px 5px 20px",
    borderRadius: "20px 20px 0px 0px",
    transition: "background-color .3s ease-in-out,padding .3s ease-in-out",
  };
  const deActiveStyle = {
    fontSize: "24px",
    padding: "5px 20px 5px 20px",
  };
  return (
    <Flex width={"100%"} height={"100vh"} flexDirection={"column"}>
      <Flex
        flexDirection={"row"}
        justifyContent={"start"}
        alignItems={"center"}
        height={"5%"}
        gap={"2%"}
        margin={"3px 0px 0px 0px"}
        marginRight={"2%"}
      >
        <Box fontSize={"36px"} margin={"30px"}>
          Pink Life
        </Box>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : deActiveStyle)}
          to={"/"}
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : deActiveStyle)}
          to={"/magazines"}
        >
          Magazines
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : deActiveStyle)}
          to={"/about"}
        >
          About
        </NavLink>
      </Flex>
      <Box
        onClick={() => {}}
        border={"1px solid black"}
        margin={"0px"}
        width={"100%"}
        height={"95%"}
        borderRadius={"20px"}
        bg={sbg}
      >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layouts;
