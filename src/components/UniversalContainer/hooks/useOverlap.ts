import {ReactNode, RefObject, useEffect, useState} from 'react';
import { debounce } from 'lodash';

interface ReferenceContent {
  referenceElementId: string;
  content: ReactNode;
}

const useOverlap = (referenceContents: ReferenceContent[], containerRef: RefObject<HTMLDivElement>) => {
  const [currentContent, setCurrentContent] = useState<React.ReactNode>(null);
  const [maxSize, setMaxSize] = useState({ maxWidth: 300, maxHeight: 200 });

  useEffect(() => {
    const updateSize = () => {
      const maxWidth = window.innerWidth - 20; // 10px margin on each side
      const maxHeight = window.innerHeight - 20; // 10px margin on each side
      setMaxSize({ maxWidth, maxHeight });
    };

    const checkOverlap = () => {
      const containerElement = containerRef.current;
      if (!containerElement) return;

      let overlappingContent = null;
      referenceContents.forEach(({ referenceElementId, content }) => {
        const referenceElement = document.getElementById(referenceElementId);
        if (!referenceElement) return;

        const referenceRect = referenceElement.getBoundingClientRect();
        const containerRect = containerElement.getBoundingClientRect();

        const isOverlapping =
            referenceRect.left < containerRect.right &&
            referenceRect.right > containerRect.left &&
            referenceRect.top < containerRect.bottom &&
            referenceRect.bottom > containerRect.top;

        if (isOverlapping) {
          overlappingContent = content;
        }
      });

      setCurrentContent(overlappingContent);
    };

    const debouncedCheckOverlap = debounce(checkOverlap, 100);

    window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', debouncedCheckOverlap);
    window.addEventListener('resize', debouncedCheckOverlap);
    updateSize();
    checkOverlap();

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('scroll', debouncedCheckOverlap);
      window.removeEventListener('resize', debouncedCheckOverlap);
    };
  }, [referenceContents, containerRef]);

  return { currentContent, maxSize };
};

export default useOverlap;
