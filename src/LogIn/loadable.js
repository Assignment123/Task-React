
import loadable from 'loadable-components';

import LoadingIndicator from './index';

export default loadable(() => import('./index'), {
  LoadingComponent: LoadingIndicator,
});