import { Alert, Box } from "@mui/material"

export function ErrorMessage(props: {
  error: Error
}) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '500px',
    }}>
      <Alert severity="error">{props.error.message}</Alert>
    </Box>
  )
}
