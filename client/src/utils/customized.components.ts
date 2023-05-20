import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';

export const CustomizedChip = styled(Chip) ({
    background: 'linear-gradient(0, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05))',
    boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
    margin: '7px',
    '& .MuiChip-label': {
        color: '#1c1b1f',
        font:'500 14px/20px Roboto',
     } 
}) as typeof Chip;