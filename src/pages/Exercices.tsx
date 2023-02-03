import Exercices from "@/components/Exercices";
import SearchExercices from "@/components/SearchExercices";
import { useState } from "react";
import { Box } from "@mui/material";

const Exercice = () => {
  const [exercices, setExercices] = useState([]);
  const [bodyPart, setBodyPart] = useState(["all"]);

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

export default Exercice;

//rename exercices and pass array of exercices to exercices component