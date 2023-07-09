import { useMemo } from "react";
import useResizing from "components/hooks/useResizing";
import { MOBILE_SCREEN_WIDTH } from "assets/static";

const useIsMobileMode = () => {
  const { width } = useResizing();
  const isMobileMode = useMemo(() => width <= MOBILE_SCREEN_WIDTH, [width]);
  return { isMobileMode };
};

export default useIsMobileMode;
