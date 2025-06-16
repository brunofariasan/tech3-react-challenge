import React from 'react';
import Flex from '../Flex';
import { SkeletonCard } from './styled';


const PostListSkeleton = () => {
  return (
    <Flex flexDirection="column" gap="16px">
      {[...Array(4)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </Flex>
  );
};

export default PostListSkeleton;
