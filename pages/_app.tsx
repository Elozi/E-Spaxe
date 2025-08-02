import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-800 text-white p-4">
          <h1 className="text-2xl font-bold">e-spaxe</h1>
        </header>
        <main className="container mx-auto p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}