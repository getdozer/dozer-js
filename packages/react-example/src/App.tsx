import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert, Box } from '@mui/material';
import { DozerProvider, useDozerEndpoint } from "@dozerjs/dozer-react"


function DozerTable () {
  const { fields, records, error } = useDozerEndpoint('trips_cache', { watch: 0 })

  if (error) {
    return (
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
        <Alert severity="error">{error.message}</Alert>
      </Box>
    )
  }
  
  return (
    <TableContainer component={Paper} sx={{ height: '100%' }}>
      <Table aria-label="dozer table">
        <TableHead>
          <TableRow>
            {fields?.map((field, idx) => (
              <TableCell key={idx}>{field.getName()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((row: any, idx) => {
            return (
              <TableRow key={idx}>
                {fields?.map(field => {
                  let val = row[field.getName()]
                  return (<TableCell component="th" scope="row" key={field.getName()}>
                    {val && val.toString()}
                  </TableCell>)
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


function App() {
  return (
    <DozerProvider>
      <DozerTable />
    </DozerProvider>
  )
}

export default App
