
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography } from '@mui/material';

const CustomBreadcrumb = ({ items }) => {
  return (
    <Breadcrumbs  separator={<NavigateNextIcon fontSize='medium' />} aria-label='breadcrumb'>
      {items.map((item, index) => (
        <Link key={index} href={item.link}>
          {index === 0 ? (
            <Typography varaint='h5' sx={{color:'#000',  fontWeight: 500, fontSize: '16px', }} >
              {item.label}
            </Typography>
          ) : (
            <Typography variant='h6' sx={{color:'#000',  fontWeight: 300, fontSize: '16px', }}>
              {item.label}
            </Typography>
          )}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumb;

