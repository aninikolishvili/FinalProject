import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const BasicRating: React.FC = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box sx={{ "& > legend": { mt: 2 }, mb: 4 }}>
      <Rating
        name="simple-controlled"
        value={value}
        sx={{ fontSize: "1.5rem" }}
        onChange={(event: React.ChangeEvent<unknown>, newValue: number | null) => {
          setValue(newValue);
        }}
        aria-label="Controlled rating"
      />
      
      

    </Box>
  );
};

export default BasicRating;
