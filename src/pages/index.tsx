import HeaderTitle from "@/components/HeaderTitle";
import HeroBanner from "@/components/HeroBanner";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <HeaderTitle />
      <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
        <HeroBanner />
      </Box>
    </>
  )
}

export default Home