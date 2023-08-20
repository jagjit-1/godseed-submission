// import { useState } from 'react';

// import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
// import { Menu } from '@mui/icons-material';

// import { Link } from 'react-router-dom';
// import { Box, Button } from '@mui/material';
// //components
// import CustomButtons from './CustomButtons';
// import Search from './Search';

// const StyledHeader = styled(AppBar)`
//     background: #2874f0;
//     height: 55px;
// `;

// const Component = styled(Link)`
//     margin-left: 12%;
//     line-height: 0;
//     color: #FFFFFF;
//     text-decoration: none;
// `;

// const SubHeading = styled(Typography)`
//     font-size: 10px;
//     font-style: italic;
// `

// const PlusImage = styled('img')({
//     width: 10,
//     height: 10,
//     marginLeft: 4
// })

// const MenuButton = styled(IconButton)(({ theme }) => ({
//     display: 'none',
//     [theme.breakpoints.down('sm')]: {
//         display: 'block'
//     }
// }));

// const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
//     margin: '0 5% 0 auto', 
//     [theme.breakpoints.down('sm')]: {
//         display: 'none'
//     }
// }));

// const Header = () => {
//     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
//     const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

//     const [open, setOpen] = useState(false);

//     const handleClose = () => {
//         setOpen(false);
//     }

//     const handleOpen = () => {
//         setOpen(true);
//     }

//     const list = () => (
//         <Box style={{ width: 250 }} onClick={handleClose}>
//             <List>
//                 <listItem button>
//                     <CustomButtons />
//                 </listItem>
//             </List>
//         </Box>
//     );


//     return (
//         <StyledHeader position="fixed">
//             <Toolbar style={{ minHeight: 55 }}>
//                 <MenuButton
//                     color="inherit"
//                     onClick={handleOpen}
//                 >
//                     <Menu />
//                 </MenuButton>

//                 <Drawer open={open} onClose={handleClose}>
//                     {list()}
//                 </Drawer>

//                 <Component to='/'>
//                     <img src={logoURL} style={{ width: 75 }} />
//                     <Box component="span" style={{ display: 'flex' }}>
//                         <SubHeading>Explore&nbsp;
//                             <Box component="span" style={{color:'#FFE500'}}>
//                                 Plus
//                             </Box>
//                         </SubHeading>
//                         <PlusImage src={subURL} />
//                     </Box>
//                 </Component>
//                 <Search />
//                 <CustomButtonWrapper>
//                     <CustomButtons />
//                 </CustomButtonWrapper>
//             </Toolbar>
//         </StyledHeader>
//     )
// }

// export default Header;

import React, { useState } from 'react'; // Don't forget to import React
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled, ButtonGroup } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import CustomButtons from './CustomButtons';
import Search from './Search';

// Styled AppBar component
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

// Styled Link component
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

// Styled Typography component
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

// Styled PlusImage component
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,
});

// Styled IconButton component
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block',
    },
}));

// Styled span component
const CustomButtonWrapper = styled('span')(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const Header = ({ web3, connectWeb3 }) => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton color="inherit" onClick={handleOpen}>
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} style={{ width: 75 }} alt="Logo" />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>
                            Flip&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>
                                Token
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="Plus" />
                    </Box>
                </Component>
                <ButtonGroup style={{ margin: "2px 4px 2px 9rem", display: "flex", justifyContent: "space-between", minWidth: "500px" }}>
                    <Button onClick={connectWeb3} disabled={web3 ? true : false} variant='contained'>{web3 ? "Wallet Connected" : "Connect Wallet"}</Button>
                    <Button variant='contained'>Download Tokenomics</Button>
                </ButtonGroup>
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    );
};

export default Header;

