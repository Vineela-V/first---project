import { useMediaQuery, useTheme, Drawer } from '@mui/material';

export default function DashboardLayout({ children, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar
        toggleDrawer={isMobile ? handleDrawerToggle : toggleDrawer}
        toggleTheme={toggleTheme}
      />
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          <Sidebar open={true} />
        </Drawer>
      ) : (
        <Sidebar open={open} />
      )}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <BreadcrumbsNav />
        <AnimatePresence mode="wait">
          <MotionWrapper key={location.pathname}>{children}</MotionWrapper>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
