import React from 'react';
import ReactDOM from 'react-dom'; 
import App from '../App';
import {render, getByText, fireEvent} from '@testing-library/react';

it('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});

it('can toggle the isCheating boolean by clicking on the robot head icon', () => {
  const {getByTestId} = render(<App />);
  
  const robotHeadIcon = getByTestId('robot-head');

  // click on the robot head icon
  fireEvent.click(robotHeadIcon);

  // check if the icon has a particular class
  expect(robotHeadIcon).toHaveClass('cheating');

  // click on the robot head icon again
  fireEvent.click(robotHeadIcon);

  // check that it does not have the class of "cheating"
  expect(robotHeadIcon).not.toHaveClass('cheating');
});
