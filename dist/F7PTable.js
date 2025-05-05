import React from 'react';
import { List } from 'framework7-react';
const F7PTable = ({ children }) => {
    return React.createElement(List, { inset: true }, children);
};
export default F7PTable;
