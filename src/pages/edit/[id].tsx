import Head from 'next/head';
import { useEditPost } from '@/hooks/useEditPost';
import Text from '@/components/micro/Text';
import Spinner from '@/components/micro/Spinner';
import BreadcrumbNav from '@/components/micro/Breadcrumb';
import PostForm from '@/components/PostForm';
import { PageContainer } from '../styles';

export default function EditPostPage() {
  const { post, loading, handleUpdate } = useEditPost();

  if (loading) return <Spinner size={40} color="#fff" />;
  if (!post) return <Text>Post não encontrado.</Text>;

  return (
    <PageContainer>
      <Head>
        <title>Editar Post</title>
      </Head>
      <BreadcrumbNav crumbs={[{ label: 'Início', href: '/' }, { label: 'Editar Post' }]} />
      <Text variant="title">Editar Post</Text>
      <PostForm initialData={post} onSubmit={handleUpdate} />
    </PageContainer>
  );
}
