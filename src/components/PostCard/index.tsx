import { Post } from '../../types/post';
import Link from 'next/link';
import Button from '../micro/Button';
import { BUTTONS } from '@/constants/buttons';

type Props = {
  post: Post;
  onDelete: (id: string) => void;
};

export default function PostCard({ post, onDelete }: Props) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link href={`/edit/${post.id}`}>{BUTTONS.EDIT}</Link>
      <Button onClick={() => onDelete(post.id)}>{BUTTONS.DELETE}</Button>
    </>
  );
}
