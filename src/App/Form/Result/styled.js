import styled from "styled-components";

export const Wrapper = styled.p`
  font-size: 22px;
  text-align: center;
  /* ________________________________________________ */
  color: ${({ theme }) => theme.color.lightslategrey};
  background-color: ${({ theme }) => theme.color.white};
  padding: 30px;
  /* ________________________________________________ */
`;