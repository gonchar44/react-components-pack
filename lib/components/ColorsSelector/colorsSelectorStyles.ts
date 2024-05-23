import styled, { css } from 'styled-components'

export const SWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const SLabel = styled.label`
  width: 30px;
  height: 30px;
  position: relative;
`

export const SInputRadio = styled.input`
  display: none;
`

export const STick = styled.div<{ $color: string; $isChecked: boolean }>`
  ${({ $color, $isChecked }) => css`
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0.9);
    transition:
      border 0.2s ease-in-out,
      transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    &:after {
      content: '';
      width: 90%;
      height: 90%;
      background-color: ${$color};
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    ${$isChecked &&
    css`
      border-color: ${$color};
      transform: scale(1);
    `};
  `};
`
