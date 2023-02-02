import { Typography } from "@mui/material"
import SearchExercices from "./SearchExercices"

function Exercices() {

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