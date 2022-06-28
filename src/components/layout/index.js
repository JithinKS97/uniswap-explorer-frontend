import { Box } from "@chakra-ui/react";
import Topbar from "./Topbar";

const Layout = (props) => {
  const { heading } = props;

  return (
    <Box>
      <Topbar heading={heading} />
      <Box height='91vh' overflow={"scroll"}>
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
