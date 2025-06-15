import { PageContainer } from '@/styles/styled';
import Head from 'next/head';
import PostForm from '@/components/PostForm';
import BreadcrumbNav from '@/components/micro/Breadcrumb';
import Text from '@/components/micro/Text';
import { usePostActions } from '@/hooks/usePostActions';

export default function CreatePostPage() {
  const { handleCreate } = usePostActions();

  return (
    <PageContainer>
      <Head>
        <title>Criar Post</title>
      </Head>
      <BreadcrumbNav crumbs={[{ label: 'Início', href: '/' }, { label: 'Criar Post' }]} />
      <Text variant="title">Criar Post</Text>
      <PostForm onSubmit={handleCreate} />
    </PageContainer>
  );
}
