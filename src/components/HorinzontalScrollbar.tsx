import React, { useContext } from 'react';
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import BodyParts from './BodyParts';
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

interface HorinzontalScrollbarProps {
    data: any;
    bodyPart: string[];
    setBodyPart: any;
}

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }: HorinzontalScrollbarProps) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item: any) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box>
            ))}
        </ScrollMenu>
    );
};

export default HorizontalScrollbar;