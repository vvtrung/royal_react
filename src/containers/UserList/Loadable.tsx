import { lazyLoad } from 'utils/loadable';

export const UserListContainer = lazyLoad(() => import('./index'));
