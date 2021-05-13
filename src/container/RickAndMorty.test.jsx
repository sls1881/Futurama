import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMorty from './RickAndMorty';

describe('Rick and Morty', () => {
  it('Searches and renders character data', async () => {
    render(<RickAndMorty />);

    screen.getByAltText('spinner');

    const ul = await screen.findByRole('list', { name: 'episodes' });
  });
});
