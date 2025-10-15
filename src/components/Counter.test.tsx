import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Counter from './Counter';
import counterReducer from '../store/counterSlice';

const createTestStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

describe('Counter Component', () => {
  test('顯示初始計數值', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('點擊增加按鈕時計數值增加', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementButton = screen.getByText('增加');
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('點擊減少按鈕時計數值減少', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const decrementButton = screen.getByText('減少');
    fireEvent.click(decrementButton);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});