import { Box } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LogInput from '../components/input';

export default function Singnup() {
  const navigate = useNavigate();
  const UserSignUp = () => {
    console.log("Successfully SignUp");
    navigate("/login",{
      state:{
        user:true
      }
    });
    
  }
  return (
    
    <>
     <Box>
        <Box sx={{padding: 1}}>
         <LogInput label="Name"/>
        </Box>    
        <Box sx={{padding: 1}}>
         <LogInput label="Password" type="password"/>
        </Box>    
        <Box sx={{padding: 1}}>
         <LogInput label="Email" type="email"/>
        </Box>    
        
        <Box sx={{padding: 1}}>
         <Button onClick={UserSignUp} color='success' variant='contained' >SignUp</Button>
        </Box>  
          
     </Box> 
    </>
  )
}
