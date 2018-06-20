import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import { rhythm } from '../utils/typography'
import GithubIcon from '../../assets/icons/github.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${rhythm(1)} 0;
  padding: 0 0 ${rhythm(1 / 2)};
  border-bottom: 1px solid #ededed;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: center;
`;

const NavListItem = styled.li`
  display: inline-block;
  margin: 0;
  margin-left: ${rhythm(1 / 2)};
`;

const Title = styled.h1`
  font-size: 16px;
  line-height: ${rhythm(4 / 3)};
  margin: 0;
  font-weight: 400;
`;

const HeaderLink = styled(Link)`
  box-shadow: none;
`;

const SocialIcon = styled.img`
  height: ${rhythm(0.8)};
  opacity: 0.4;
  display: flex;
  align-self: center;
`;

const Header = ({ githubUrl, twitterUrl }) => (
  <Navigation>
    <Title>
      <HeaderLink to={'/'}>
        leimon.io
      </HeaderLink>
    </Title>
    <NavList>
      <NavListItem>
        <HeaderLink to={'/'}>
          Index
        </HeaderLink>
      </NavListItem>
      <NavListItem>
        <HeaderLink to={'/about'}>
          About
        </HeaderLink>
      </NavListItem>
      <NavListItem>
        <a href={githubUrl} target="_blank">
          <SocialIcon src={GithubIcon} alt="github" />
        </a>
      </NavListItem>
      <NavListItem>
        <a href={twitterUrl} target="_blank">
          <SocialIcon src={TwitterIcon} alt="twitter" />
        </a>
      </NavListItem>
    </NavList>
  </Navigation>
)

export default Header
