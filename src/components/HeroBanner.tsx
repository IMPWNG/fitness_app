import { Box, Stack, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Checkbox } from "@mui/material";
import { useState } from "react";

interface HeroBannerProps {
  open?: boolean
}

const HeroBanner = ({ open }: HeroBannerProps) => {

  const [openDialog, setOpenDialog] = useState(open)

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} >
      <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem', xl: '5.5rem' } }}>
        Find and Build your perfect workout
      </Typography>
      <Button variant="contained" sx={{ mt: '1.5rem', fontSize: '1.5rem', px: '2rem', py: '1rem' }} onClick={handleClickOpen}>
        Get Started
      </Button>
      <Dialog
        open={openDialog || false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Find the rigth workout based on your type"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
          <Typography sx={{ mt: '1rem' }}>
            Name :
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            sx={{ mt: '1rem' }}
          />
          <Typography sx={{ mt: '1rem' }}>
            Height :
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="height"
            label="Height"
            type="height"
            sx={{ mt: '1rem' }}
          />
          <Typography sx={{ mt: '1rem' }}>
            Weight :
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="weight"
            label="Weight"
            type="weight"
            sx={{ mt: '1rem' }}
          />
          <Typography sx={{ mt: '1rem' }}>
            Age :
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            type="age"
            sx={{ mt: '1rem' }}
          />
          <Typography sx={{ mt: '1rem' }}>
            Want to focus on ? :
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: '1rem' }}>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography>
              Strength
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: '1rem' }}>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography>
              Endurance
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: '1rem' }}>
            <Checkbox

              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography>
              Flexibility
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: '1rem' }}>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography>
              Weight Loss
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: '1rem' }}>
            <Checkbox

              defaultChecked

              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography>
              Muscle Gain
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: '1rem' }}>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography>
              Toning
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" autoFocus>
            Close
          </Button>
          <Button onClick={handleClose} autoFocus color="success">
            Find my workout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default HeroBanner