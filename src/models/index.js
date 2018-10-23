import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';

import app from './app';

const loading = createLoadingPlugin();

const store = init({
  models: {
    app,
  },
  plugins: [loading],
});

store.dispatch.app.init();

export default store;
