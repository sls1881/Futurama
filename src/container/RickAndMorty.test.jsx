import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RickAndMorty from './RickAndMorty';

describe('Rick and Morty', () => {
  it.skip('Searches and renders character data', async () => {
    render(<RickAndMorty />);

    screen.getByAltText('spinner');

    const ul = await screen.findByRole('list', { name: 'episodes' });
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('Episode Search');
    userEvent.type(input, 1);

    const button = await screen.findByRole('button', {
      name: 'episode-search',
    });
    userEvent.click(button);

    return waitFor(() => {
      const episode = screen.getByText('Pilot', { exact: true });
      expect(episode).not.toBeEmptyDOMElement();
    });
  });
});
