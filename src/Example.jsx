import  { BasicBox, PageLayout, CardLikeBox, MUIBasicsDemo } from './Basics';
import MuiDemo from './Basics';
import { Stack, Grid, Paper, Box, Typography, Button } from '@mui/material';

export default function Home() {
    return (
        <Stack spacing={4} sx={{ mt: 4, px: 2 }}>
            <BasicBox />
            <PageLayout />
            <CardLikeBox />
            <MUIBasicsDemo />
            <MuiDemo />

            <Typography variant="h5">Stack + Grid + Flexbox Layout</Typography>

            <Stack direction="row" spacing={2}>
                <Button variant="contained">One</Button>
                <Button variant="contained">Two</Button>
                <Button variant="contained">Three</Button>
            </Stack>

            <Grid container spacing={2}>
                {[1, 2, 3].map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item}>
                        <Paper sx={{ p: 2 }}>Grid Item {item}</Paper>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                bgcolor: 'grey.100'
            }}>
                <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, borderRadius: 1 }}>Box 1</Box>
                <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 2, borderRadius: 1 }}>Box 2</Box>
                <Box sx={{ bgcolor: 'error.main', color: 'white', p: 2, borderRadius: 1 }}>Box 3</Box>
            </Box>
        </Stack>
    );
}
