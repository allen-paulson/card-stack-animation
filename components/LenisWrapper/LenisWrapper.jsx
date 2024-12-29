import { ReactLenis } from "lenis/react";

const LenisWrapper = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 0.8, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default LenisWrapper;
