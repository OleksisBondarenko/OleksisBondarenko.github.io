import { useState, useEffect, useCallback } from "react";

const useIsScrolUp = () => {
  const [y, setY] = useState(window.scrollY);
  const [isScolUp, setIsScrolUp] = useState(false);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setIsScrolUp(true);
      } else if (y < window.scrollY) {
        setIsScrolUp(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return { isScolUp };
};

export default useIsScrolUp;
