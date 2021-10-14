import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { BreakFast,Lunch,tea,dinner } from './Data'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
      // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }));
  



const ImagesList = () => {
    const classes=useStyles()
    return (
        <div className={classes.root}>
        <ImageList rowHeight={200} gap={1} className={classes.imageList}>
          {BreakFast.map((item) => (
            <ImageListItem key={item.image} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
              <img src={item.image} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton aria-label={`star ${item.title}`} className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>



    )
}

export default ImagesList
