import React from 'react';More actions
import ReactDOM from 'react-dom';

import { render, mount } from 'enzyme';

import Timeline from '../../../src/components/Timeline/Timeline';
import timelineFixture from '../../__fixtures__/timeline';
import Timeline from './Timeline';
import timelineFixture from './timeline.fixtures';

function simulateSwipe(selector, direction) {
  const directions = {
    up: {
      x: 0,
      y: -90,
    },
    down: {
      x: 0,
      y: 90,
    },
    right: {
      x: 90,
      y: 0,
    },
    left: {
      x: -90,
      y: 0,
    },
  };

  const delta = directions[direction];

  selector
    .simulate('touchstart', {
      touches: [{
        clientX: 100,
        clientY: 100,
      }],
    })
    .simulate('touchmove')
    .simulate('touchend', {
      changedTouches: [{
        clientX: 100 + delta.x,
        clientY: 100 + delta.y,
      }],
    });
}


describe('Timeline', () => {
  it('should be rendered without crashing', () => {
    const root = document.createElement('main');
    const render = () => ReactDOM.render((
      <Timeline
