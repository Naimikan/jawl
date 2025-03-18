import { createContext } from '@lit/context';

import { ThemeContext } from './types';

const themeContext = createContext<ThemeContext>('theme');

export default themeContext;
