import styled, { css } from "styled-components";

export const LabelText = styled.span`
  display: inline-block; 
  padding: 15px;
  max-width: 210px; 
  width: 100%;
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax414}px) {
    max-width: 245px;
  }

  ${({ lightslategrey }) => lightslategrey && css`
    background-color: ${({ theme }) => theme.color.lightslategrey};
  `}
  
  ${({ crimson }) => crimson && css`
    background-color: ${({ theme }) => theme.color.crimson};
  `}
`;

export const Field = styled.input`
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
  width: 100%;
  max-width: 475px;
  padding: 15px;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax414}px) {
    max-width: 245px;
  }
`;

export const Header = styled.h1`
  text-transform: uppercase;
  padding: 15px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.crimson};
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 26px; 
  width: 100%;
  padding: 15px;
  border-style: none;
  color: hsl(0, 0%, 100%);
  background-color: ${({ theme }) => theme.color.lightslategrey};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const ParagraphWarning = styled.p`
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 1.5;
  font-size: 20px;
  padding: 15px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.deepskyblue};
`;

export const Asterisk = styled.span`
  color: ${({ theme }) => theme.color.lightgreen};
  font-weight: bold;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  text-align: center;
`;

export const Result = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 22px;
  text-align: center;
`;