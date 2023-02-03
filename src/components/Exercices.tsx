import { Typography, Box } from "@mui/material"
import SearchExercices from "./SearchExercices"
import { useState } from "react"

interface ExercicesProps {
  setExercices: any;
  bodyPart: string;
  setBodyPart: any;
}

const Exercices = ({ setExercices, bodyPart, setBodyPart }: ExercicesProps) => {

  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}, mt: 10}} m="auto">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <SearchExercices setExercices={setExercices} bodyPart={bodyPart} setBodyPart={setBodyPart} />  
    </Box>
    
  )
}

export default Exercices