import React from 'react';
import { ProductConsumer } from './context';

export default function HomePage() {
  return <ProductConsumer>{value => <h1>{value.state}</h1>}</ProductConsumer>;
}
