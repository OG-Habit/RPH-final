import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    minWidth: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

interface Props {
    buttonText: string;
    title: string;
    content: React.ReactNode;
}

export default function PopupModal(props: Props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Grid container justifyContent='center'>
                <Grid item>
                    <Button onClick={handleOpen} variant='contained' color='primary'>{props.buttonText}</Button>
                </Grid>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Paper sx={style}>
                        <Grid container>
                            <Grid item xs={10}>

                            </Grid>
                            <Grid item xs={2}>
                            <Button onClick={handleClose}>
                                <CloseIcon />
                            </Button>
                            </Grid>
                        </Grid>
                        
                        <Box className="flex justify-between items-center mb-2">
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                {props.title}
                            </Typography>
                        </Box>
                        {props.content}
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
}
