import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';

import app from './app';
import navigation from './navigation';

const loading = createLoadingPlugin();

const store = init({
  models: {
    app,
    navigation,
  },
  plugins: [loading],
});

store.dispatch.app.init();

export default store;
