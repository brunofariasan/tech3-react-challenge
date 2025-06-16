import { Container, PostCard } from '@/styles/styled';
import { useRouter } from 'next/router';
import { usePosts } from '@/hooks/usePosts';
import Text from '@/components/micro/Text';
import Flex from '@/components/micro/Flex';
import Button from '@/components/micro/Button';
import PostListSkeleton from '@/components/micro/PostListSkeleton';
import Spinner from '@/components/micro/Spinner';
import { capitalize } from '@/utils/stringUtils';
import EmptyState from '@/components/micro/EmptyState';
import DeleteConfirmationModal from '@/components/micro/DeleteConfirmationModal';
import { useState } from 'react';
import { MESSAGES } from '@/constants/messages';
import { BUTTONS } from '@/constants/buttons';

export default function Home() {
  const router = useRouter();
  const { posts, loading, loadingDelete, handleDelete } = usePosts();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      {loadingDelete && <Spinner size={40} color="#fff" />}
      <Flex flexDirection="column" gap="4.5rem">
        <Text variant="post-title">Posts</Text>

        <Flex flexDirection="column">
          {loading ? (
            <PostListSkeleton />
          ) : posts.length === 0 ? (
            <EmptyState />
          ) : (
            posts.map((post) => (
              <PostCard key={post.id} onClick={() => router.push(`/detail/${post.id}`)}>
                <Flex flexDirection="column" gap="4px">
                  <Text variant="small-title-post">{post.title}</Text>
                  <Text variant="author">Autor: {capitalize(post.primary_author.name)}</Text>
                  <Text variant="text-status">{post.status === 'published' && 'Publicado'}</Text>
                </Flex>
                <Flex gap="10px">
                  <Button
                    backgroundColor="deepNavyBlue"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/edit/${post.id}`);
                    }}
                  >
                    ✎
                  </Button>
                  <Button
                    backgroundColor="darkCharcoal"
                    color="red"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPostId(post.id);
                      setShowModal(true);
                    }}
                  >
                    🗑️
                  </Button>
                </Flex>
              </PostCard>
            ))
          )}
        </Flex>
        <Button
          backgroundColor="green"
          color="white"
          height="40px"
          width="105px"
          onClick={() => router.push('/create')}
        >
          {BUTTONS.ADD}
        </Button>
      </Flex>
      <DeleteConfirmationModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedPostId(null);
        }}
        onConfirm={() => {
          if (selectedPostId) handleDelete(selectedPostId);
          setShowModal(false);
          setSelectedPostId(null);
        }}
         message={MESSAGES.DELETE_CONFIRMATION}
      />
    </Container>
  );
}
