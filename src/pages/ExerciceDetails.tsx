import Exercices from "@/components/Exercices";
import SearchExercices from "@/components/SearchExercices";
import { useState } from "react";
import { Box } from "@mui/material";

const ExerciceDetails = () => {

  const [exercices, setExercices] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Exercices
        setExercices={setExercices}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default ExerciceDetails;
