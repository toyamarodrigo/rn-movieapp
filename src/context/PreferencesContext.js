import { createContext } from 'react';

const PreferencesContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export default PreferencesContext;
