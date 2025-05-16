import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const reportData = [
  { id: 1, name: 'Sales Report', status: 'Completed', date: '2025-05-01' },
  { id: 2, name: 'User Activity', status: 'In Progress', date: '2025-05-12' },
  { id: 3, name: 'Revenue Report', status: 'Completed', date: '2025-04-28' },
];

export default function Reports() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Report Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportData.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.status}</TableCell>
                <TableCell>{report.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
