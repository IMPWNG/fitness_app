import HeaderTitle from "@/components/HeaderTitle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import SearchExercises from "@/components/SearchExercices";
import Exercices from "@/components/Exercices";
import { Box } from "@mui/material";
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <HeaderTitle />
      <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
    
        <HeroBanner />
        <SearchExercises />
        <Exercices />

      </Box>
    </>
  )
}
