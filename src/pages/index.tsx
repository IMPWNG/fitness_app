import HeaderTitle from "@components/headerTitle";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

import { Box } from "@mui/material";
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <HeaderTitle />
      <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
        <Navbar />
        <Footer />
      </Box>
    </>
  )
}
