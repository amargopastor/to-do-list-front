import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';

export const Item = ({ title, description }) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar>
        <WorkIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={title}
      secondary={(
        <>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            Description:
            {' '}
          </Typography>
          {description}
        </>
          )}
    />
    <Divider variant="inset" component="li" />
  </ListItem>
);
