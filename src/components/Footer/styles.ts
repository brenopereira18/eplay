import styled from 'styled-components'
import { cores } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.div`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Links = styled.ul`
  display: flex;
`

export const Link = styled(HashLink)`
  color: ${cores.cinzaClaro};
  margin-right: 8px;
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
