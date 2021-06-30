import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Suspense } from 'react';

const LazyLoadObserver = ({ children }) => {

  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <React.Fragment>

      {inView === false && (<div ref={ref} className="lazy-load-observer"></div>)}

      {inView && (
        <Suspense fallback={
          <div className="lazy-fallback">
            Fallback: Failed to load component...
          </div>
        }>
          {children}
        </Suspense>
      )}

    </React.Fragment>
  );
};

export default LazyLoadObserver;