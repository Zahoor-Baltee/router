import { TextField } from '@mui/material'
import { Box } from '@mui/system';


export default function  LogInput(props) {
    const { label, type } = props;
    return (
        <>
            <Box>
                <Box sx={{padding: 1}}>
                <TextField
            id='outlined-basic'
            label={label}
            type={type}
             variant='outlined' />
                </Box>
            </Box>
        </>
    )
}
