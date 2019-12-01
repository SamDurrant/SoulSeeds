import React from 'react';
import Heading from '../../elements/Heading/Heading';
import Button from '../../elements/Button/Button';
import classes from './CTA.module.css';
import blob from '../../assets/blobs/blob-shape-4.svg';
import {Link} from 'react-scroll';

class CTA extends React.Component {
  state = {
    blobCoordinates: {
      top: '-10%',
      left: '-10%'
    }
  }
  createMagnet = (e) => {
    const width = this.refs[classes.CTA].clientWidth;
    const height = this.refs[classes.CTA].clientHeight;

    const oX = Math.floor((e.nativeEvent.clientX/width) * 100) + '%';
    const oY = Math.floor((e.nativeEvent.clientY/height) * 100) + '%';

    this.setState({
      blobCoordinates: {
        top: oY, 
        left: oX
      }
    });
  }

  removeMagnet = () => {
    this.setState({
      blobCoordinates: {
        top: '-10%',
        left: '-10%'
      }
    })
  }

  render() {
    const {top, left} = this.state.blobCoordinates;
    const blobStyle = {
      top: top,
      left: left
    }
    let content = (
      <Link 
        to={'ourboxes'} 
        smooth={true}>Get Growing</Link>
    )

    return (
      <section 
        className={classes.CTA} 
        onMouseMove={this.createMagnet}
        onTouchMove={this.createMagnet}
        onMouseLeave={this.removeMagnet}
        onTouchEnd={this.removeMagnet}
        ref={classes.CTA}>
        <div 
          className={classes.BlobMagnet}
          style={blobStyle}>
            <img src={blob} alt="floating blob"/>
        </div>
        <Heading content={'Get Started'}/>
        <p>make the time to make change happen. Wake up, water your plants and feed your soul.</p>
        <Button content={content}/>
      </section>
    )
  }
}

export default CTA;