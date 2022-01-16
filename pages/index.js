import dynamic from 'next/dynamic';

const App = dynamic(() => import('../src/AppShell'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
