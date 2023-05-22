import Avatar from '@/app/components/Avatar'
import Author from "@/app/components/Author";
export default function Profile() {
  return (
    <>
      <Avatar
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
        size={100}
      />
      <Avatar
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh',
        }}
        size={80}
      />
      <Avatar
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6',
        }}
        size={50}
      />
    </>
  );
}