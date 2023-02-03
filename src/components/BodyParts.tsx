import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import Image from 'next/image';
import { useState } from 'react';

interface BodyPartProps {
    item: string;
    setBodyPart: any;
    bodyPart: string[];
}

const BodyPart = ({ item, setBodyPart, bodyPart }: BodyPartProps) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                backgroundColor: bodyPart?.includes(item) ? '#F5F5F5' : '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    backgroundColor: '#F5F5F5',
                },
            }}
            onClick={() => setBodyPart(item)}

        >
            <Image src={Icon} alt="icon" />

            <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
        </Stack>

    )

  
};

export default BodyPart;