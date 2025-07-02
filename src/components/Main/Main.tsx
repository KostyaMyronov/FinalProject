import { Host } from '@/components/Main/Host';
import { Form } from '@/components/Main/Form/Form';
import { Reviews } from '@/components/Main/Reviews';

export const Main = () => {
  return (
    <main className='grid justify-center'>
      <Host />
      <Form />
      <Reviews />
    </main>
  );
};
