import type { NextPage } from 'next';

const Home: NextPage = () => {
  const packages = [
    {
      name: 'React',
      value: 'v18',
    },
    {
      name: 'Next JS',
      value: 'v12',
    },
    {
      name: 'CSS Framework',
      value: 'Tailwind v3',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'Axios',
    },
    {
      name: 'Styled Components',
    },
    {
      name: 'Eslint',
    },
  ];
  return (
    <div className="container px-3 min-h-screen mt-5">
      Your content will display here
      <p className="text-xs text-red-500">source: /src/pages/index</p>
      <div className="mt-5">
        <p>What package inside:</p>
        <ul className="list-disc ml-5">
          {packages.map((item, i) => (
            <li key={i}>
              {item.name}{' '}
              {item.value ? <span className="font-bold">: {item.value}</span> : ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
