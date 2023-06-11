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

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const faqData = [
    {
      id: "cjw001",
      question: "new Question",
      answer: "My very own answer",
    },
    {
      id: "cjw002",
      question: "another Question",
      answer: "Just another answer",
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="FAQ"
        subtitle="Frequently Asked  Questions & Answers I have given over the time of my career"
      />
      {faqData.map((faq) => (
        <Box mb="10px">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{faq.answer}</AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default FAQ;
