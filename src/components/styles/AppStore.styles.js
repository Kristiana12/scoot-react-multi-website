import { Container } from '../ExportComponents';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import devices from '../styles/devices';

export const StyledAppStore = styled.section`
  padding: 3.875rem 1.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.navigationBackground};
  position: relative;
  z-index: 2;
  max-width: 100%;
`;

export const StyledMainContainer = styled(Container)`
  @media ${devices.laptop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;

export const StyledStoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.85rem;

  @media ${devices.desktop} {
    margin-left: auto;
    gap: 1.125rem;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 1.85rem;
  color: ${({ theme }) => theme.colors.textContrast};
  max-width: 460px;
  margin: auto;
  margin-bottom: 2.5rem;

  @media ${devices.tablet} {
    font-size: 3rem;
  }
  @media ${devices.laptop} {
    margin-left: 0;
    margin-bottom: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  transition: transform 0.4s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const StyledImageContainer = styled.div`
  position: absolute;
  right: -200px;
  bottom: -3px;
  z-index: -1;
`;
