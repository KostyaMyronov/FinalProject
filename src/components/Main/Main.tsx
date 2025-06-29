import { Host } from './Host';
import { Form } from './Form';
import { Reviews } from './Reviews';

export const Main = () => {
  return (
    <main className='grid justify-center'>
      <Host />
      <Form />
      <Reviews />
    </main>
  );
};
