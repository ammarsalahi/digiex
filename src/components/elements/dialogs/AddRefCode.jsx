import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { Box, InputAdornment, FormGroup, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 10,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


export default function AddCardBank({ open, close, fulling, sizewidth }) {

    const [issmall, setissmall] = React.useState(fulling);

    const textfieldstyle = {
        fontSize: "13px",
        '& :focus': {
            backgroundColor: "#eef1ff",
            borderRadius: "8px"
        }
    }
    const btnbg = {
        backgroundColor: "#eef1ff",
        borderRadius: "8px"
    }
    const adornmentstyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: -10,
        paddingLeft: 4,
    }

    const sizeDialog = () => {
        if (fulling == false) {
            if (window.innerWidth < 768) {
                setissmall(true)
            }
            else {
                setissmall(false)
            }
        }

    }
    React.useEffect(() => {
        sizeDialog();
        window.addEventListener('resize', sizeDialog, false);
    }, [issmall]);

    const [inventory, setInventory] = React.useState();

    const boxselected = {
        border: "1px solid #424BFB",
        borderRadius: "8px",
        height: "56px",
        backgroundColor: "rgba(238,241,255,1)",
        minWidth: "max-content",
        textAlign: "center",
        width: "20%",
    }
    const boxunselected = {
        border: "1px solid #cbe4eb",
        borderRadius: "8px",
        height: "56px",
        minWidth: "max-content",
        textAlign: "center",
        width: "20%",
    }
    return (
        <BootstrapDialog
            fullScreen={issmall ? true : false}
            sx={{ direction: "ltr", left: 0, width: sizewidth }}
            onClose={close}
            aria-labelledby="customized-dialog-title"
            open={open}
            TransitionComponent={Transition}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom boldfont-dialog dialog-title-container">
                ایجاد کد دعوت جدید
            </BootstrapDialogTitle>
            <DialogContent sx={{ width: "100%" }} className='mycontainer'>
                <div className='titlemini'>
                    <Box className="border-right-marginboldblue titlemindialog">
                        <Typography variant="p" component="div">
                            میزان کمیسیون دوستان خود را انتخاب کنید
                        </Typography>
                    </Box>
                </div>
                <FormGroup sx={{ mb: "24px" }}>
                    <Box className="d-flex overflow-auto" sx={{ mb: "24px" }}>
                        <Box className="d-flex justify-content-center align-items-center " sx={inventory === '0' ? boxselected : boxunselected} onClick={() => setInventory("0")}
                            style={{ fontSize: "14px", cursor: "pointer", maerginLeft: "16px" }}>
                            <Typography color={inventory === '0' && 'primary'}>
                                0%
                            </Typography>
                        </Box>
                        <Box className="d-flex justify-content-center align-items-center" sx={inventory === '5' ? boxselected : boxunselected} onClick={() => setInventory("5")}
                            style={{ fontSize: "14px", cursor: "pointer", marginInline: "16px" }}>
                            <Typography color={inventory === '5' && 'primary'}>
                                5%
                            </Typography>
                        </Box>
                        <Box className="d-flex justify-content-center align-items-center" sx={inventory === '10' ? boxselected : boxunselected} onClick={() => setInventory("10")}
                            style={{ fontSize: "14px", cursor: "pointer", marginInline: "16px" }}>
                            <Typography color={inventory === '10' && 'primary'}>
                                10%
                            </Typography>
                        </Box>
                        <Box className="d-flex justify-content-center align-items-center" sx={inventory === '15' ? boxselected : boxunselected}
                            onClick={() => setInventory("15")} style={{ fontSize: "14px", cursor: "pointer", marginInline: "16px" }}>
                            <Typography color={inventory === '15' && 'primary'}>
                                15%
                            </Typography>
                        </Box>
                        <Box className="d-flex justify-content-center align-items-center" sx={inventory === '20' ? boxselected : boxunselected} onClick={() => setInventory("20")}
                            style={{ fontSize: "14px", cursor: "pointer", marginInline: "16px" }}>
                            <Typography color={inventory === '20' && 'primary'}>
                                20%
                            </Typography>
                        </Box>
                        <Box className="d-flex justify-content-center align-items-center" sx={inventory === '25' ? boxselected : boxunselected} onClick={() => setInventory("25")}
                            style={{ fontSize: "14px", cursor: "pointer", marginInline: "16px" }}>
                            <Typography color={inventory === '25' && 'primary'}>
                                25%
                            </Typography>
                        </Box>
                    </Box>
                    
                </FormGroup>

                <div className='row  mycontainer backgroundClr w-100'>
                    <div className='col-lg-6 col-md-6 col-12  '>
                        <Box className='d-flex text-center justify-content-center'>
                            <Box>
                                <Typography variant='p' fontSize="14px" component="div">
                                    سهم شما
                                </Typography>
                                <br />
                                <Typography variant="p" fontSize="20px" component="div" sx={{ fontWeight: "bold" }}>
                                    10%
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <Box className='d-flex text-center justify-content-center'>
                            <Box>
                                <Typography variant='p' fontSize="14px" component="div">
                                    سهم دوست شما
                                </Typography>
                                <br />
                                <Typography variant="p" fontSize="20px" component="div" sx={{ fontWeight: "bold" }}>
                                    10%
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                </div>
             
                {fulling === false && <Box sx={{ pt: "24px" }}>

                    <Button variant="contained" sx={{ fontSize: "16px", height: "55px", borderRadius: "8px" }} fullWidth>
                        ایجاد کد دعوت
                    </Button>
                </Box>}

            </DialogContent>
            {fulling === true && <DialogActions>
                <Button variant="contained" sx={{ fontSize: "16px", height: "55px", borderRadius: "8px" }} fullWidth>
                   ایجاد کد دعوت 
                </Button>
            </DialogActions>}
        </BootstrapDialog>
    )
}
