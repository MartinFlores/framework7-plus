import React from 'react';
import { List } from 'framework7-react';

interface F7PTableProps {
  children: React.ReactNode;
}

const F7PTable = ({ children }: F7PTableProps) => {
  return <List inset>{children}</List>;
};

export default F7PTable;


