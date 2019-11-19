import React from 'react';
import classes from './Blob.module.css';
import blobOne from '../../assets/blobs/blob-shape-1.svg';
import blobTwo from '../../assets/blobs/blob-shape-2.svg';
import blobThree from '../../assets/blobs/blob-shape-3.svg';

const blob = (props) => {
  const blobs = {
    One: blobOne,
    Two: blobTwo,
    Three: blobThree
  }
  
  return (
    <img 
      src={blobs[props.blobSource]}
      className={classes[`Blob-${props.section}`]}
      alt={'decorative blob shape for background.'}></img>
  )
}

export default blob;