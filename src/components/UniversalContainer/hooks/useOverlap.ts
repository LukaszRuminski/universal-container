import { RefObject, useEffect, useState } from "react";
import { debounce } from "lodash";

const useOverlap = (
  referenceElementId: string,
  containerRef: RefObject<HTMLDivElement>
) => {
  const [isOverlapping, setIsOverlapping] = useState(false);

  useEffect(() => {
    const checkOverlap = () => {
      const referenceElement = document.getElementById(referenceElementId);
      const containerElement = containerRef.current;

      if (!referenceElement || !containerElement) return;

      const referenceRect = referenceElement.getBoundingClientRect();
      const containerRect = containerElement.getBoundingClientRect();

      const isOverlapping =
        referenceRect.left < containerRect.right &&
        referenceRect.right > containerRect.left &&
        referenceRect.top < containerRect.bottom &&
        referenceRect.bottom > containerRect.top;

      setIsOverlapping(isOverlapping);
    };

    const debouncedCheckOverlap = debounce(checkOverlap, 100);

    window.addEventListener("scroll", debouncedCheckOverlap);
    window.addEventListener("resize", debouncedCheckOverlap);
    checkOverlap();

    return () => {
      window.removeEventListener("scroll", debouncedCheckOverlap);
      window.removeEventListener("resize", debouncedCheckOverlap);
    };
  }, [referenceElementId, containerRef]);

  return { isOverlapping };
};

export default useOverlap;
