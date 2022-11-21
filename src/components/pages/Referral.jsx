import React from 'react'
import { Box } from '@mui/material';
import Headinforef from '../elements/global/Headinforef'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as svgsicon } from '../../img/icons/copy-clipboard.svg'
import { ReactComponent as svgsicon2 } from '../../img/icons/trash.svg'
import { ReactComponent as svgsicon3 } from '../../img/icons/shareicon.svg'
import Svg from '../utils/Svgs'
import { Button } from '@mui/material'
import { ReactComponent as AddCircle } from '../../img/icons/circle-add.svg';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AddRefCode from '../elements/dialogs/AddRefCode';
import DigiSwitch from '../elements/global/DigiSwitch';

function createData(date, name, operation, count, address, txid, station, auth) {
    return { date, name, operation, count, address, txid, station, auth };
}
function createData1(date, refcode, friendname, datecode, auth) {
    return { date, refcode, friendname, datecode, auth };
}
function createData2(row, refcode, transaction, friendname, yourcommission, datecode) {
    return { row, refcode, transaction, friendname, yourcommission, datecode };
}

const rowstyle = {
    '&:last-child td, &:last-child th': { border: 0 },
    borderTop: "1px solid #afa6b4",
    // borderTop:"1px solid rgba(203, 228, 235, 1)",
}
const cellstyle = {
    py: "24px",
    fontSize: "14px !important",
    textAlign: "left"
}
const rows = [
    createData("DGVSDGVDSF", "https://mui.com/material-ui/material-icons/", "10% / 50%", "345435"),
]
const rows1 = [
    createData1("1", "FBGHFKJF", "آرش  زرندی", "23 تیر 1378", "احراز هویت شده "),
]
const rows2 = [
    createData2("1", "FBGHFKJF", "خرید / تتر", "آرش زرندی", "230,000 تومان ", "23 تیر 1378"),
    createData2("1", "FBGHFKJF", "فروش / تتر", "آرش زرندی", "230,000 تومان ", "23 تیر 1378"),
]
const headstyle = {
    py: "16px",
    fontSize: "14px !important",
    textAlign: "left",
    color: "rgba(164, 166, 180, 1)",
    maxWidth: "200px",
    minWidth: "120px",
}





function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >

            {value === index && (
                // <Box sx={{ p: 7 }}>
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>

    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,

    };
}
export default function Referral() {
    const [tabvalue, setTabvalue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setTabvalue(newValue);
    };
    const copyto = (text) => {
        navigator.clipboard.writeText(text)
    }
    const [sizewidth, setSizewidth] = React.useState('auto');
    const [open, setopen] = React.useState(false)

    const handleOpenModal = (props)=>(event)=> {
        setopen(props)
    }

    const sizeDialog = () => {
        if (window.innerWidth < 700) {
            setSizewidth('auto')
        }
        else if (window.innerWidth >= 1281) {
            setSizewidth('650px')
        }
        else {
            setSizewidth('500px')

        }
    }
    React.useEffect(() => {
        sizeDialog();
        window.addEventListener('resize', sizeDialog, false);
      }, [sizewidth]);
    return (
        <Box >
            <Headinforef />
            <Box>
                <Box sx={{ borderBottom: 0, borderColor: 'divider' }} >
                    <Tabs value={tabvalue} onChange={handleChange} fontSize="large" aria-label="basic tabs example"
                        TabIndicatorProps={{
                            style: { background: "#424BFB", height: 3 }
                        }}
                    >
                        <Tab sx={{ padding: "32px 0 16px 0" }} label={<span className={tabvalue === 0 ? "tab-color2" : ""}>کدهای دعوت</span>} {...a11yProps(0)} />
                        <Tab sx={{ padding: "32px 0 16px 0" }} label={<span className={tabvalue === 1 ? "tab-color2" : ""}>دوستان من</span>} {...a11yProps(1)} />
                        <Tab sx={{ padding: "32px 0 16px 0" }} label={<span className={tabvalue === 2 ? "tab-color2" : ""}>کمیسیون من</span>} {...a11yProps(2)} />
                        <Button sx={{ marginLeft: 'auto' }} color="inherit" startIcon={<AddCircle />} onClick={handleOpenModal(true)} >
                            ایجاد کد دعوت جدید
                        </Button>
                    </Tabs>

                </Box>
                <Box>
                    <TabPanel value={tabvalue} index={0}>
                        <Box className='row' >
                            <TableContainer className="table-cnt">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={headstyle}>کد دعوت</TableCell>
                                            <TableCell sx={headstyle}>لینک دعوت</TableCell>
                                            <TableCell sx={headstyle}>سهم شما/سهم دوست شما</TableCell>
                                            <TableCell sx={headstyle}>عملیات</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, idx) => (
                                            <TableRow
                                                key={idx}
                                                sx={rowstyle}
                                            >
                                                <TableCell sx={cellstyle}>{row.date}
                                                    <Svg Component={svgsicon}
                                                        alt="copy-clipboard"
                                                        className='me-4' style={{ cursor: "pointer" }}
                                                        onClick={() => copyto(row.date)}
                                                    />

                                                </TableCell>
                                                <TableCell sx={cellstyle} dir="ltr">
                                                    <Svg Component={svgsicon}
                                                        alt="copy-clipboard"
                                                        className='me-4' style={{ cursor: "pointer" }}
                                                        onClick={() => copyto(row.date)}
                                                    />
                                                    {row.name}

                                                </TableCell>
                                                <TableCell sx={cellstyle}>{row.operation}</TableCell>
                                                <TableCell sx={cellstyle} className="d-flex align-items-center">
                                                    <DigiSwitch defaultChecked={true} cheched={true}/>
                                                    <Svg Component={svgsicon2} alt="trash" className='me-4' style={{ cursor: "pointer" }} />
                                                    <Svg Component={svgsicon3} alt="trash" className='me-4' style={{ cursor: "pointer" }} />

                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </TabPanel>
                    <TabPanel value={tabvalue} index={1}>
                        <Box className='row' >
                            <TableContainer className="table-cnt">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={headstyle}>ردیف</TableCell>
                                            <TableCell sx={headstyle}>کد دعوت</TableCell>
                                            <TableCell sx={headstyle}>نام دوست شما</TableCell>
                                            <TableCell sx={headstyle}>تاریخ استفاده از کد دعوت</TableCell>
                                            <TableCell sx={headstyle}>وضعیت حساب کاربری</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows1.map((row, idx) => (
                                            <TableRow key={idx} sx={rowstyle} >
                                                <TableCell sx={cellstyle}>{row.date}

                                                </TableCell>
                                                <TableCell sx={cellstyle}>
                                                    {row.refcode}
                                                    <Svg Component={svgsicon} alt="copy-clipboard" className='me-4' style={{ cursor: "pointer" }} />

                                                </TableCell>
                                                <TableCell sx={cellstyle}>{row.friendname}</TableCell>
                                                <TableCell sx={cellstyle}>{row.datecode}</TableCell>
                                                <TableCell sx={cellstyle}>{row.auth}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </TabPanel>
                    <TabPanel value={tabvalue} index={2}>
                        <Box className='row' >
                            <TableContainer className="table-cnt">
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={headstyle}>ردیف</TableCell>
                                            <TableCell sx={headstyle}>کد دعوت</TableCell>
                                            <TableCell sx={headstyle}>معامله</TableCell>
                                            <TableCell sx={headstyle}>نام دوست شما</TableCell>
                                            <TableCell sx={headstyle}>مقدار کمیسیون شما</TableCell>
                                            <TableCell sx={headstyle}>تاریخ استفاده از کد دعوت</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows2.map((row, idx) => (
                                            <TableRow key={idx} sx={rowstyle} >
                                                <TableCell sx={cellstyle}>{row.row}
                                                    {/* <img src={svgsicon} alt="copy-clipboard" className='me-4' /> */}
                                                </TableCell>
                                                <TableCell sx={cellstyle}>
                                                    {row.refcode}
                                                    <Svg Component={svgsicon} alt="copy-clipboard" className='me-4' style={{ cursor: "pointer" }} />
                                                </TableCell>
                                                <TableCell sx={cellstyle}>{row.transaction}</TableCell>
                                                <TableCell sx={cellstyle}>{row.friendname}</TableCell>
                                                <TableCell sx={cellstyle}>{row.yourcommission}</TableCell>
                                                <TableCell sx={cellstyle}>{row.datecode}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </TabPanel>
                </Box>
            </Box>
            {/* <AddCardBank  /> */}
            <AddRefCode open={open} close={handleOpenModal(false)} fulling={true} sizewidth={sizewidth} />
        </Box>
    )
}




