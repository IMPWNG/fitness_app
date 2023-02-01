import { Typography } from "@mui/material"
import SearchExercices from "./SearchExercices"

interface ExercicesProps {

}

function Exercices({ }: ExercicesProps) {



  return (
    <>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <SearchExercices />
    </>
    
  )
}

export default Exercices