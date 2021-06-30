import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 900px;
  margin: 20px;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.deepskyblue};
  box-shadow: 0 0 30px ${({ theme }) => theme.color.deepskyblue};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax414}px) {
    flex-basis: 600px;
  }
`;