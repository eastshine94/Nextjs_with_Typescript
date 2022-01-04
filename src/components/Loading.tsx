import React, { ReactNode, useState, useEffect } from 'react';
import { createPortal, unmountComponentAtNode } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  return createPortal(
    children,
    document.getElementById('modal-root') as Element
  );
};
function Loading() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    return () => {
      unmountComponentAtNode(document.getElementById('modal-root') as Element);
    };
  }, []);

  return (
    <>
      {isBrowser && (
        <Portal>
          <div
            className="fixed w-full h-full pt-[20%] pb-40
      text-center text-6xl font-bold text-white bg-black opacity-90 z-50"
          >
            loading......
          </div>
        </Portal>
      )}
    </>
  );
}

export default Loading;
