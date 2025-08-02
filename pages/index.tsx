import { FC } from 'react';
import { UI_TEXT } from '../constants';

const Home: FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{UI_TEXT.WELCOME_MESSAGE}</h2>
      <p>Explore our curated collection of fashion products.</p>
    </div>
  );
};

export default Home;