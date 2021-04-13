import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const useOnViewport = (ref, isLoading = false, options = { rootMargin: "30%" }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setInView(entry.isIntersecting);
      });
    }, options);

    ref?.current && observer.observe(ref?.current);

    return () => ref?.current && observer.unobserve(ref?.current);
  }, [options, isLoading]);

  return { inView };
};

useOnViewport.propTypes = {
  options: PropTypes.object,
  isLoading: PropTypes.bool
};
