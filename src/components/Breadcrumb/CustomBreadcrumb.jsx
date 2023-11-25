// CustomBreadcrumb.js
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Typography } from '@mui/material';

const CustomBreadcrumb = ({ items }) => {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
      {items.map((item, index) => (
        <Link key={index} href={item.link}>
          <Typography color='#000'>{item.label}</Typography>
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumb;
