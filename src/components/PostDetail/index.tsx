import { Container } from './styled';
import { usePostDetail } from '@/hooks/usePostDetail';
import Text from '@/components/micro/Text';
import Spinner from '@/components/micro/Spinner';
import Flex from '@/components/micro/Flex';
import Button from '@/components/micro/Button';
import { capitalize } from '@/utils/stringUtils';
import BreadcrumbNav from '@/components/micro/Breadcrumb';

export default function PostDetail() {
  const { post, loading, router } = usePostDetail();

  return (
    <Container>
      {loading || !post ? (
        <Spinner size={40} color="#fff" />
      ) : (
        <>
          <BreadcrumbNav crumbs={[{ label: 'Início', href: '/' }, { label: 'Detalhes do Post' }]} />
          <Flex flexDirection="column" gap="20px">
            <Text variant="title">Detalhes do Post</Text>
            <Flex flexDirection="column" gap="10px" minHeight="200px">
              <Text variant="details-post">
                <strong>Título:</strong> {post.title}
              </Text>
              <Text variant="details-post">
                <strong>Descrição:</strong>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </Text>
            </Flex>
            <Text variant="details-post">
              <strong>Autor:</strong> {capitalize(post.primary_author.name)}
            </Text>
            <Flex gap="10px" justify="right">
              <Button width="100px" height="40px" onClick={() => router.push(`/edit/${post.id}`)}>
                Editar
              </Button>
            </Flex>
          </Flex>
        </>
      )}
    </Container>
  );
}
