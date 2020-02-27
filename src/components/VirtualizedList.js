import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

const skills = [
    "Java", "JavaScript", "React", "MongoDB", "SQL", "NodeJS",
    "Express", "REST"
]

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={skills}>
      <ListItemText primary={`${skills[index]}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={300} width={200} itemSize={46} itemCount={8}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}