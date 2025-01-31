import { Box, styled } from "@mui/material";
import React from 'react';
import headerImage from '../images/jobbg.jpg';



const Header = () => {

    const StyleHeader = styled(Box)(({ theme })=>(
        {
            display: "flex",
            justifyContent: "center",
            minHeight: 400,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.secondary.main,
            backgroundImage: `url(${headerImage})`
        }
    ));
    return (
        <>
          <StyleHeader>

          </StyleHeader>

        </>
    )
   
}

export default Header;