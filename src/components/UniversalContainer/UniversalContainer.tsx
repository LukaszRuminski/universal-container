import React, {
  HTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ContainerProps,
  Content,
  StyledContainer,
} from "./UniversalContainer.styled";
import useOverlap from "./hooks/useOverlap";

const Container = forwardRef<
  HTMLDivElement,
  ContainerProps & HTMLAttributes<HTMLDivElement>
>(({ $isOpen, $maxWidth, $maxHeight, ...rest }, ref) => (
  <StyledContainer
    $isOpen={$isOpen}
    $maxWidth={$maxWidth}
    $maxHeight={$maxHeight}
    ref={ref}
    {...rest}
  />
));

interface ContainerComponentProps {
  content: React.ReactNode;
  referenceElementId: string;
}

const ContainerComponent: React.FC<ContainerComponentProps> = ({
  content,
  referenceElementId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOverlapping } = useOverlap(referenceElementId, containerRef);
  const [maxSize, setMaxSize] = useState({ maxWidth: 300, maxHeight: 200 });

  useEffect(() => {
    const updateSize = () => {
      const maxWidth = window.innerWidth - 20; // 10px margin on each side
      const maxHeight = window.innerHeight - 20; // 10px margin on each side
      setMaxSize({ maxWidth, maxHeight });
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <Container
      ref={containerRef}
      $isOpen={isOverlapping}
      $maxWidth={maxSize.maxWidth}
      $maxHeight={maxSize.maxHeight}
      data-testid="container"
    >
      {isOverlapping && <Content>{content}</Content>}
    </Container>
  );
};

export default ContainerComponent;
