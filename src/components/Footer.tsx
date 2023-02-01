import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      bgcolor='primary.main'
      color='primary.contrastText'
      p={2}
      position='fixed'
      bottom={0}
      left={0}
      right={0}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
    >
      <Typography variant='body2'>
       Powered by <a href="https://exercisedb.com/" target="_blank" rel="noreferrer">ExerciseDB</a>
      </Typography>
    </Box>

  )
}

