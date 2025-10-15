import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import counterReducer from './store/counterSlice';

const createTestStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

describe('App Routing', () => {
  test('渲染首頁', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('歡迎來到首頁')).toBeInTheDocument();
  });

  test('渲染關於頁面', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('關於我們')).toBeInTheDocument();
  });

  test('渲染 404 頁面', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/non-existent-route']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
