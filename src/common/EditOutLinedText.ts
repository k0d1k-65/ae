import styled from "styled-components";

type EditedOutlineProps = {
  isEdited: boolean;
};

export const EditedOutline = styled.div<EditedOutlineProps>`
  position: relative;

  ${({ isEdited }) =>
    isEdited &&
    `
    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 4px;
      background-color: #2afd0480;
      z-index: -10;
      -webkit-transition: all .1s linear;
      -moz-transition: all .1s linear;
      transition: all .1s linear;
    }
  `}
`;
