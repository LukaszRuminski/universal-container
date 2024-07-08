import styled, { css, keyframes } from "styled-components";

export interface ContainerProps {
  $isOpen: boolean;
  $maxWidth: number;
  $maxHeight: number;
}

const expandAnimation = keyframes`
  from {
    width: 50px;
    height: 50px;
    opacity: 0.5;
  }
  to {
    width: max-content;
    height: max-content;
    opacity: 1;
  }
`;

const collapseAnimation = keyframes`
  from {
    width: max-content;
    height: max-content;
    opacity: 1;
  }
  to {
    width: 50px;
    height: 50px;
    opacity: 0.5;
  }
`;

export const StyledContainer = styled.div<ContainerProps>`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: ${(props) => (props.$isOpen ? "max-content" : "80px")};
  height: ${(props) => (props.$isOpen ? "max-content" : "50px")};
  max-width: ${(props) => `${props.$maxWidth}px`};
  max-height: ${(props) => `${props.$maxHeight}px`};
  overflow: hidden;
  border: 4px solid blue;
  background: white;
  padding: ${(props) => (props.$isOpen ? "16px" : "0")};
  box-sizing: border-box;
  transition: all 0.3s ease;

  ${(props) =>
    props.$isOpen
      ? css`
          animation: ${expandAnimation} 0.3s ease forwards;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        `
      : css`
          animation: ${collapseAnimation} 0.3s ease forwards;
        `}

  @media (max-width: 600px) {
    width: ${(props) => (props.$isOpen ? "100%" : "80px")};
    height: ${(props) => (props.$isOpen ? "100%" : "50px")};
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.5;

  h1,
  h2,
  h3 {
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 10px;
  }

  a {
    color: blue;
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
