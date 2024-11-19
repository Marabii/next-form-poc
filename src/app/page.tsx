import { Form } from './components/Form';

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <h3 className='text-xl font-bold'>Form</h3>
      <Form />
    </div>
  );
}