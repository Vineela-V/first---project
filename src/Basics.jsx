// Box //
import { Box, Container, Paper } from '@mui/material'; 

export function BasicBox() {
   return (
    <Box sx={{ backgroundColor: 'lightblue', p: 2, borderRadius: 2 }}>
        This is the Box Component
    </Box>
   );
}

export function PageLayout() {
    return (
        <Container maxWidth="md">
           <h2>Welcome to the page</h2>
           <p>This content is centered and constrained in width.</p>
        </Container>
    );
}

export function CardLikeBox() {
    return (
        <Paper elevation={2} sx={{ p: 2 }}> 
            This is content inside a Paper Component
        </Paper>
    );
}

export function MUIBasicsDemo() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Paper elevation={4} sx={{ padding: 3 }}>
                    <h3>MUI Basics</h3>
                    <p>This combines Box, Container, Paper!</p>
                </Paper>
            </Box>
        </Container>
    );
}


import { Typography, Button, Stack } from '@mui/material';
import { Save, Delete } from '@mui/icons-material';

export default function MuiDemo() {
  return (
    <Stack spacing={3} alignItems="center" mt={5}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to MY Page!
      </Typography>

      <Typography variant="body1" color="text.secondary">
        This is an example of using Typography, Buttons, and Icons together in MUI.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<Save />}>
          Save
        </Button>

        <Button variant="outlined" color="error" endIcon={<Delete />}>
          Delete
        </Button>
      </Stack>
    </Stack>
  );
}

// sx prop //
/*
<Box sx={{ backgroundColor: 'lightblue', padding: 2, borderRadius: 2 }}>
  Styled Box
</Box>

<Typography sx={{ color: 'primary.main' }}>
  Theme Primary Color Text
</Typography>

// Pseduo selector //
<Button sx={{
  '&:hover': {
    backgroundColor: 'secondary.light',
    transform: 'scale(1.05)',
  }
}}>
  Hover Me
</Button>

// layout - flex-box //
<Box sx={{
  display: 'flex',
  flexDirection: 'row', // or 'column'
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 2
}}>
</Box>

// layout - grid //
<Box sx={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 2
}}>
</Box> 

// colors //
<Box sx={{
  bgcolor: 'primary.main', // background color
  color: 'white', // text color
  border: '1px solid',
  borderColor: 'secondary.main'
}}>
  Themed Colors
</Box>


//  Hover, Focus, & Pseudo-classes //
<Button sx={{
  '&:hover': {
    backgroundColor: 'success.light',
    transform: 'scale(1.05)'
  }
}}>
  Hover Me
</Button>

// Grids and Layouts //
// stack //

import { Stack, Button} from '@mui/material';

<Stack spacing={2} direction="row">
    <Button variant='contained'>One</Button>
    <Button variant='contained'>Two</Button>
    <Button variant='contained'>Three</Button>
    <Button variant='contained'>Four</Button>
</Stack>


// Grid (12-column responsive layout) //
import { Grid, Paper } from '@mui/material';

<Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={4}>
    <Paper sx={{ p: 2 }}>Item 1</Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Paper sx={{ p: 2 }}>Item 2</Paper>
  </Grid>
  <Grid item xs={12} sm={12} md={4}>
    <Paper sx={{ p: 2 }}>Item 3</Paper>
  </Grid>
</Grid>

// Box with Flexbox //

 import { Box } from '@mui/material';

<Box sx={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 2,
  p: 2,
  bgcolor: 'grey.100'
}}>
  <Box sx={{ p: 1, bgcolor: 'primary.main', color: 'white' }}>Box 1</Box>
  <Box sx={{ p: 1, bgcolor: 'secondary.main', color: 'white' }}>Box 2</Box>
</Box>


// Holy Grail Layout //

<Grid container direction="column" minHeight="100vh">
  <Grid item sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
    Top Nav
  </Grid>

  <Grid item container sx={{ flex: 1 }}>
    <Grid item xs={12} md={3} sx={{ bgcolor: 'grey.200', p: 2 }}>
      Side Nav
    </Grid>
    <Grid item xs={12} md={9} sx={{ p: 2 }}>
      Main Content
    </Grid>
  </Grid>

  <Grid item sx={{ bgcolor: 'primary.dark', color: 'white', p: 2 }}>
    Footer
  </Grid>
</Grid>


// responsive cards grid //
<Grid container spacing={2}>
  {[...Array(6)].map((_, i) => (
    <Grid item xs={12} sm={6} md={4} key={i}>
      <Paper sx={{ p: 2, height: '100%' }}>Card {i + 1}</Paper>
    </Grid>
  ))}
</Grid>


// Two-Column with Stack on Small Screens //
<Stack
  direction={{ xs: 'column', md: 'row' }}
  spacing={2}
>
  <Box sx={{ flex: 1, bgcolor: 'info.light', p: 2 }}>Left</Box>
  <Box sx={{ flex: 2, bgcolor: 'success.light', p: 2 }}>Right</Box>
</Stack>

// center content responsively //
<Container maxWidth="sm">
  <Paper sx={{ p: 4, mt: 4, textAlign: 'center' }}>
    Centered Box
  </Paper>
</Container>
*/