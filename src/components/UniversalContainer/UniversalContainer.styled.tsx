import styled, { css, keyframes } from 'styled-components';
import {Paper} from "@mui/material";
import React, {forwardRef, HTMLAttributes} from "react";

export interface ContainerProps {
    $isOpen: boolean;
    $maxWidth: number;
    $maxHeight: number;
}

const StyledContainer = styled(Paper)<ContainerProps>(({ theme, $isOpen, $maxWidth, $maxHeight }) => ({
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    width: $isOpen ? 'max-content' : '80px',
    height: $isOpen ? 'max-content' : '50px',
    maxWidth: `${$maxWidth}px`,
    maxHeight: `${$maxHeight}px`,
    overflow: 'hidden',
    border: `4px solid ${theme.palette.primary.main}`,
    background: theme.palette.background.paper,
    padding: $isOpen ? '16px' : '0',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    boxShadow: $isOpen ? theme.shadows[4] : theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
        width: $isOpen ? '100%' : '80px',
        height: $isOpen ? '100%' : '50px',
        bottom: 0,
        right: 0,
        borderRadius: 0,
    },
}));

export const Container = forwardRef<HTMLDivElement, ContainerProps & HTMLAttributes<HTMLDivElement>>(
    ({ $isOpen, $maxWidth, $maxHeight, children, ...rest }, ref) => (
        <StyledContainer
            $isOpen={$isOpen}
            $maxWidth={$maxWidth}
            $maxHeight={$maxHeight}
            ref={ref}
            {...rest}
        >
            {children}
        </StyledContainer>
)
);

export const Content = styled.div`
  font-family: Roboto, Arial, sans-serif;
  color: #333;
  line-height: 1.5;

  h1, h2, h3 {
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 10px;
  }

  a {
    color: ${props => props.theme.palette.primary.main};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  iframe {
    width: 100%;
    height: auto;
    border: none;
  }
`;
