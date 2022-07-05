import { Box } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LogInput from '../components/input';

export default function LogIn() {
  const navigate = useNavigate();
  const UserLogIn = () => {
    console.log("Successfully login");
    navigate("/dashboard",{
      state:{
        user:true
      }
    });
    
  }
  return (
    
    <>
     <Box>
           
        <Box sx={{padding: 1}}>
         <LogInput label="Password" type="password"/>
        </Box>    
        <Box sx={{padding: 1}}>
         <LogInput label="Email" type="email"/>
        </Box>    
        
        <Box sx={{padding: 1}}>
         <Button onClick={UserLogIn} color='success' variant='contained' >LogIn</Button>
        </Box>  
          
     </Box> 
    </>
  )
}
