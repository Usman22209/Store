import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store'; // Ensure the path is correct
import MyFormComponent from './components/MyFormComponent'; // Importing the FormComponent

const App = () => {
  return (
    <Provider store={store}>
      <MyFormComponent />
    </Provider>
  );
};

export default App;
