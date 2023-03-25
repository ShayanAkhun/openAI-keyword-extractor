import React from "react";
import { Image, Heading, Text } from "@chakra-ui/react";
import logo from "../../assets/light-bulb.svg";
const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} />
      <Heading color="white" marginBottom="1rem">
        AI keyWord Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste in your Text and we'll extract the keywords for you
      </Text>
    </>
  );
};

export default Header;
