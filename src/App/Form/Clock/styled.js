import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: right;
  font-family: monospace;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.lightslategrey};
  font-size: 16px;
  padding: 20px;
`;