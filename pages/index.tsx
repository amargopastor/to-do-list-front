import { Menu } from '../components/Menu';
import useSWR from 'swr';

export default () => {
const { data } = useSWR('/chores');
  if (!data) {
    return <div>no chores</div>;
  }
  return (
    <div>
      {data.map((chores) => (
        <p key={chores.id}>{chores.title}</p>
      ))}
    </div>
  );
};
