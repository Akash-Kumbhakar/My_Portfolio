import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Icon } from '@iconify/react';  // leet icon , gfg icon


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: "20;" }}>
            <DiCssdeck size="4rem" /><Span> Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Akash-Kumbhakar">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/akash-kumbhakar/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://leetcode.com/samcodeaccess/">
          <Icon icon="simple-icons:leetcode" width="25" height="25" />
        </SocialIcons>
        <SocialIcons href="https://auth.geeksforgeeks.org/user/akash24aeccse/profile">
          <Icon icon="simple-icons:geeksforgeeks" width="30" height="30" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
