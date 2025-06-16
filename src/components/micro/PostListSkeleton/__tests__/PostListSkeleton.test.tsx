import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostListSkeleton from '..';

describe('PostListSkeleton', () => {
  it('deve renderizar 4 SkeletonCard', () => {
    render(<PostListSkeleton />);
    const skeletons = screen.getAllByTestId('skeleton-card');
    expect(skeletons).toHaveLength(4);
  });
});
