import React, { lazy, Suspense } from 'react';

interface Opts {
  fallback: React.ReactNode;
}

export const lazyLoad = <
  T extends Promise<any>,
  U extends React.ComponentType<any>
>(
  importFunc: () => T,
  opts: Opts = { fallback: null },
) => {
  const LazyComponent = lazy(importFunc);

  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense fallback={opts.fallback!}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
