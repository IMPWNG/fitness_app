import { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { exercicesOptions, fetchData } from "@/utils/fetchData";

function SearchExercices() {

  const [search, setSearch] = useState('');
  const [exercices, setExercices] = useState([]);

  // useEffect(() => {
  //   const fetchExercicesData = async () => {
  //     const bodyPartsData = await fetchData('');
  // }, [])


  const handleSearch = async (e: any) => {
    if (search) {
      const exercicesData = await fetchData(exercicesOptions);
      console.log(exercicesData);

      const searchedExercices = exercicesData.filter((exercice: any) => {
        return exercice.name.toLowerCase().includes(search) || exercice.bodyPart.toLowerCase().includes(search) || exercice.equipment.toLowerCase().includes(search) || exercice.target.toLowerCase().includes(search)
      }
      )
      setSearch('');
      setExercices(searchedExercices);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Box position="relative" mb="72px">
        <TextField
          sx={{ width: { lg: '1170px', xs: '350px' } }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ color: '#fff', textTransform: 'none', height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>

      </Box>
    </Stack>
  )
}

export default SearchExercices