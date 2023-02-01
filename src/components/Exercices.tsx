import { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { exercicesOptions, fetchData } from "@/utils/fetchData";

interface ExercicesProps {

}

function Exercices({ }: ExercicesProps) {

  const [search, setSearch] = useState('');

  const handleSearch = async(e: any) => {
    if(search) {
     const exercicesData = await fetchData(exercicesOptions);
     console.log(exercicesData);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{ width: { lg: '1170px', xs: '350px' } }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{  color: '#fff', textTransform: 'none', height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
       test
      </Box>
    </Stack>
    

  )
}

export default Exercices