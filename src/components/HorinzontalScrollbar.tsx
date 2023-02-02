import React, { useContext } from 'react';
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <Image src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <Image src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollbar = ({ data }: any ) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data!.map((item: any) => (
            <Box 
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                {item === 'all' ? <Typography variant="h5" sx={{ color: '#fff', textTransform: 'uppercase' }}>{item}</Typography> : <Image src={item.image} alt={item.name}  />}


          </Box>
        ))}
    </ScrollMenu>
);

export default HorizontalScrollbar;