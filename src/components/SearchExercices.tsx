import { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { exercicesOptions, fetchData } from "@/utils/fetchData";
import HorizontalScrollbar from "./HorinzontalScrollbar";

interface SearchExercicesProps {
  setExercices: any;
  bodyPart: string[];
  setBodyPart: any;
}

const SearchExercices = ({ setExercices, bodyPart, setBodyPart }: SearchExercicesProps) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState(['']);

  useEffect(() => {

    const fetchExercicesData = async () => {
      const bodyPartsData: string[] = await fetchData(exercicesOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercicesData();
  }, [])


  const handleSearch = async (_: any) => {
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
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyParts} />
      </Box>
    </Stack>
  )
}

export default SearchExercices