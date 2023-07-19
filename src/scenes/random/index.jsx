import useFetch from "../../hooks/useFetch";

import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const RandomQuote = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const Quotes =  useFetch("https://api.quotable.io/random", 10).data

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header
        title="Random Quotes"
        subtitle="Random Quotes through the ages from the Quotable API"
      />
      </Box>      
      {Quotes.map((quote) =>
      (        
        <Box mb="10px" key={quote._id}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {quote?.author}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{quote?.content}</AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default RandomQuote;
