
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/Actions';
import { useEffect } from 'react';
import { AppDispatch,RootState} from "../redux/Store";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    name ?: string,
    email?: string,
    phonenumber ?: string,
    Nopass ?:string,
    pickup ?:string,
    drop ?:string,
    date ?:string,
    time?:string,
    id?:number,
    
  ) {
    return {name ,email,phonenumber,Nopass,pickup,drop,date,time,id };
  }
  
  const rows = [
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
    createData(),
    createData()
   
  ];
  const useStyles = makeStyles({
    table:{
      marginTop:100,
      minwidth:900,
    }
  })
  
const Home = () => {
  const classes =useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const navigate=useNavigate();
  const userdemo= useSelector((state:RootState)=>state.users.users)
  console.log("userdemo",userdemo)
  useEffect(()=>{
    dispatch(loadUsers());

  },[])
  const handleDelete=(id:number)=>{
    console.log("id:",id)
    if(window.confirm("Are you sure wanted to delete the user?")){
      dispatch(deleteUser(id))
    }

  }
  const handleUpdate=(id:number,user:any)=>{
    navigate(`/edit/${id}`,{state:user})
  }
  const handleChange =()=>{
    navigate('/view')
    
  }
  return (
    <div>
       <div className='add'>
      <Button variant='contained' color='primary'>Add Details</Button>
      </div>
        <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell align="center">Id</StyledTableCell>
          <StyledTableCell align="center">Name</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Phonenumber</StyledTableCell>
          <StyledTableCell align="center">Number of passengers</StyledTableCell>
          <StyledTableCell align="center">Pickup address</StyledTableCell>
          <StyledTableCell align="center">Drop address</StyledTableCell>
          <StyledTableCell align="center">Date</StyledTableCell>
          <StyledTableCell align="center">Time</StyledTableCell>
          <StyledTableCell align="center">Action</StyledTableCell>
        </TableRow>
      </TableHead>
      
      <TableBody>
        
        {userdemo && userdemo.map((user:any) => (
          <StyledTableRow key={user.id}>
             <StyledTableCell align="center">{user.id}</StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {user.name}
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {user.email}
            </StyledTableCell>
            <StyledTableCell align="center">{user.phonenumber}</StyledTableCell>
            <StyledTableCell align="center">{user.Nopass}</StyledTableCell>
            <StyledTableCell align="center">{user.pickup}</StyledTableCell>
            <StyledTableCell align="center">{user.drop}</StyledTableCell>
            <StyledTableCell align="center">{user.date}</StyledTableCell>
            <StyledTableCell align="center">{user.time}</StyledTableCell>
            
            <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        m: 1,
      },
    }}
  >
            <StyledTableCell align="center">    <ButtonGroup disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons">
        <Button style={{marginRight:"5px"}} color='warning' onClick={()=>handleDelete(user.id)}>Delete</Button>
        <Button color='primary'  onClick={()=>handleUpdate(user.id,user)}>Edit</Button>
        
      </ButtonGroup></StyledTableCell>
      </Box>
            
          </StyledTableRow>
        ))}
      </TableBody>
      
    </Table>
  </TableContainer>
  </div>
  )
}

export default Home
