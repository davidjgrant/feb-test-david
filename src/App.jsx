import React from 'react';
import { Layout } from './components/Layout/layout';
import { Minicart } from './components/Minicart/minicart';
import { PopularDishes } from './components/PopularDishes/popularDishes';
import { data } from './server/data';

function App() {
  return (
    <Layout>
      <PopularDishes data={data} />
      <Minicart data={data}/>
    </Layout>
  );
}

export default App;
