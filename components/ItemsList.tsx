import * as React from 'react';
import List from '@mui/material/List';
import { Item } from './Item';

export const ItemsList = ({ chores }) => (
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {chores.map((chore) => (
      <Item key={chore.id} title={chore.title} description={chore.description} />
    ))}
  </List>
);
