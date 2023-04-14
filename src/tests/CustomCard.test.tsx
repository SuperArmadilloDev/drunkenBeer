import { render, screen } from '@testing-library/react';
import { CustomCard } from '../components';
import '@testing-library/jest-dom';

describe('useFetchData Tests', () => {
  test('A fully rendered Card', function () {
    render(
      <CustomCard
        title='tt'
        subtitle='subtitle'
        addInfSub='addInfSub'
        description='description'
        image='https://placehold.co/600x400'
      />
    );

    expect(screen.getByText('tt')).toBeInTheDocument();
    expect(screen.getByText('subtitle')).toBeInTheDocument();
    expect(screen.getByText('addInfSub')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-node-access
    const img = document.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain('600x400');
  });

  test('Minimum requirement for a card to be rendered', function () {
    render(<CustomCard title='tt' />);

    expect(screen.getByText('tt')).toBeInTheDocument();

    expect(screen.queryByText('subtitle')).not.toBeInTheDocument();
    expect(screen.queryByText('addInfSub')).not.toBeInTheDocument();
    expect(screen.queryByText('description')).not.toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-node-access
    const img = document.querySelector('img') as HTMLImageElement;
    expect(img).toBeNull();
  });
});

export {};
