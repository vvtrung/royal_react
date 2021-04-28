import { lazyLoad } from 'utils/loadable';

export const LoginContainer = lazyLoad(() => import('./index'));
