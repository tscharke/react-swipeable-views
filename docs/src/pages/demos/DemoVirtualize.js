/* eslint-disable react/no-multi-comp */

import React from 'react';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import SupportTouch from 'docs/src/modules/components/SupportTouch';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

function slideRenderer(params) {
  const { index, key } = params;
  let style;

  switch (mod(index, 3)) {
    case 0:
      style = styles.slide1;
      break;

    case 1:
      style = styles.slide2;
      break;

    case 2:
      style = styles.slide3;
      break;

    default:
      break;
  }

  return (
    <div style={Object.assign({}, styles.slide, style)} key={key}>
      {`slide n°${index + 1}`}
    </div>
  );
}

class DemoVirtualize extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  handleClick = () => {
    this.setState({
      index: 49,
    });
  };

  render() {
    return (
      <SupportTouch>
        <VirtualizeSwipeableViews
          index={this.state.index}
          onChangeIndex={this.handleChangeIndex}
          slideRenderer={slideRenderer}
        />
        <br />
        <Button onClick={this.handleClick}>{'go to slide n°50'}</Button>
      </SupportTouch>
    );
  }
}

export default DemoVirtualize;
