import useSWR from 'swr';
import { ItemsList } from '../components/ItemsList';

export default () => {
  const { data } = useSWR('/chores');
  if (!data) {
    return <div>no chores</div>;
  }
  return (
    <main>
      <div>
        <ItemsList chores={data} />
      </div>
    </main>

  );
};
