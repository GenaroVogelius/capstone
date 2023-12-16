import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;


