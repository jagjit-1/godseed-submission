// import React from 'react';
// import { Box, Button, MenuItem, Select } from '@mui/material';

// const BlueBoxWithButtons = () => {
//     return (
//         <Box
//             bgcolor="white"
//             width="100%"
//             minHeight="100vh"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             flexDirection="column"
//             display="grid"
//             gridTemplateColumns="repeat(2, 0.5fr)"
//             gap="0.5rem"
//         >
//             <Button variant="outlined" color="primary" style={{ marginBottom: '1rem', color: 'blue' }}>
//                 Earn
//             </Button>
//             <Button variant="outlined" color="primary" style={{ marginBottom: '1rem', color: 'blue' }}>
//                 Earn
//             </Button>
//             <Button variant="outlined" color="primary" style={{ marginBottom: '1rem', color: 'blue' }}>
//                 Earn
//             </Button>
//             <Button variant="outlined" color="primary" style={{ marginBottom: '1rem', color: 'blue' }}>
//                 Earn
//             </Button>
//         </Box>
//     );
// };

// const BlueBoxWithDropdown = () => {
//     return (
//         <Box
//             bgcolor="#2874f0"
//             width="100%"
//             minHeight="100vh"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             flexDirection="column"
//         >
//             <Select
//                 variant="outlined"
//                 color="primary"
//                 value={'rewards'}
//                 style={{ minWidth: 150, marginBottom: '1rem', color: 'white' }}
//             >
//                 <MenuItem value="rewards">Rewards</MenuItem>
//             </Select>
//         </Box>
//     );
// };

// const YourPage = () => {
//     return (
//         <div style={{ display: 'flex' }}>
//             <BlueBoxWithButtons />
//             <BlueBoxWithDropdown />
//         </div>
//     );
// };

// export default YourPage;

import React from 'react';
import { Box, Button, MenuItem, Select } from '@mui/material';

const BlueBoxWithButtons = () => {
    return (
        <Box
            bgcolor="white"
            width="100%"
            minHeight="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            display="grid"
            gridTemplateColumns="repeat(2, 0.5fr)"
            gap="0.5rem"
        >
            <Button variant="outlined" color="primary" style={{ marginTop: '20rem', marginBottom: '20rem', color: 'blue' }}>
                Earn1
            </Button>
            <Button variant="outlined" color="primary" style={{ marginTop: '20rem', marginBottom: '20rem', color: 'blue' }}>
                Earn2
            </Button>
            <Button variant="outlined" color="primary" style={{ marginTop: '-60rem', marginBottom: '-20rem', color: 'blue' }}>
                Earn3
            </Button>
            <Button variant="outlined" color="primary" style={{ marginTop: '-60rem', marginBottom: '-20rem', color: 'blue' }}>
                Earn4
            </Button>
        </Box>
    );
};

const BlueBoxWithDropdown = () => {
    return (
        <Box
            bgcolor="#2874f0"
            width="100%"
            minHeight="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Select
                variant="outlined"
                color="primary"
                value={'rewards'}
                style={{ minWidth: 150, marginBottom: '1rem', color: 'white' }}
            >
                <MenuItem value="rewards">Rewards</MenuItem>
            </Select>
        </Box>
    );
};

const YourPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <BlueBoxWithButtons />
            <BlueBoxWithDropdown />
        </div>
    );
};

export default YourPage;
