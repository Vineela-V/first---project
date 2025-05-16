import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMoreIcon } from "@mui/x-data-grid";

export default function FAQSection() {
    return (
        <>
         <Typography variant="h6"></Typography>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How do i use this app?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Navigate using the tabs and bottom menu.</Typography>
            </AccordionDetails>
         </Accordion>
        </>
    );
}