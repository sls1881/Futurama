import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMorty from './RickAndMorty';

describe('Rick and Morty', () => {
  it('Searches and renders character data', () => {
    render(<RickAndMorty />);

    screen.getByAltText('spinner');
  });
});
