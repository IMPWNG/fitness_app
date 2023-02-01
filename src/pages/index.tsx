import HeaderTitle from "@/pages/components/HeaderTitle";
import Navbar from "@/pages/components/Navbar";
import Footer from "@/pages/components/Footer";

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
