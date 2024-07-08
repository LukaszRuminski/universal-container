import React, {useRef } from 'react';
import {Container, Content} from './UniversalContainer.styled';
import useOverlap from './hooks/useOverlap';


interface ReferenceContent {
    referenceElementId: string;
    content: React.ReactNode;
}

interface UniversalContainerProps {
    referenceContents: ReferenceContent[];
}

const UniversalContainer: React.FC<UniversalContainerProps> = ({ referenceContents }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { currentContent, maxSize } = useOverlap(referenceContents, containerRef);

    return (
        <Container
            ref={containerRef}
            $isOpen={currentContent !== null}
            $maxWidth={maxSize.maxWidth}
            $maxHeight={maxSize.maxHeight}
            data-testid="container"
        >
            {currentContent && <Content>{currentContent}</Content>}
        </Container>
    );
};

export default UniversalContainer;