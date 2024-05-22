import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('it can display the results of an HTTP request', () => {
  // render the component
  const {getByTestId, findByText} = render(<Result status="Waiting" />);

  // find the fetch high scores button
  const highScoreButton = getByTestId('high-scores');

  // click on the fetch high scores button
  fireEvent.click(highScoreButton);

  // find something from our hardcoded data
  return findByText('alice', { exact: false });
});
