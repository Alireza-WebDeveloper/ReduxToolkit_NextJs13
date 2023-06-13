'use client';
import Link from 'next/link';
import { Button } from '@mui/material';
import { Route } from 'next';
import { FC } from 'react';

type LinkButtonProps = {
  href: Route;
  name: string;
};
const LinkButton: FC<LinkButtonProps> = ({ href, name }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Button
        color="inherit"
        variant="text"
        size="large"
        sx={{ fontSize: '1.2rem' }}
      >
        {name}
      </Button>
    </Link>
  );
};

export default LinkButton;
