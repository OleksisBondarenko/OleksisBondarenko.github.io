import React from 'react';
import userPhoto from 'assets/images/user/user.jpg';
import validation from 'assets/images/works/validation.jpg';
import jwt from 'assets/images/works/JWT.jpg';
import rest from 'assets/images/works/rest.jpg';

// import WORK2 from "assets/images/works/work2.png";
// import WORK3 from "assets/images/works/work3.png";

import linkedIn from 'assets/images/logos/linkedIn.svg';
import gitHub from 'assets/images/logos/github.svg';
import ArrowLeft from 'assets/images/icons/arrow-left.svg';
import Quotes from 'assets/images/icons/quotes.svg';

// works
import awesomeCard from 'assets/images/works/awesome-card.jpg';
import simpleShop from 'assets/images/works/simple-shop.jpg';

import html from 'assets/images/logos/html.svg';
import css from 'assets/images/logos/css.svg';
import js from 'assets/images/logos/js.svg';
import react from 'assets/images/logos/react.svg';
import figma from 'assets/images/logos/figma.png';

// users
import Vasil from 'assets/images/user/Vasil.jpg';
import Alina from 'assets/images/user/Alina.jpg';
import Dmitriy from 'assets/images/user/Dmitriy.jpg';
import Yaroslav from 'assets/images/user/Yaroslav.jpg';

import resume from 'assets/data/resume.pdf';
// files
export const RESUME = resume;
// images
export const MOBILE_SCREEN_WIDTH = 767;
export const USER_PHOTO = userPhoto;
export const ARROW_LEFT = ArrowLeft;
export const ARROW_RIGHT_GRAY = (
  <svg
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.63335 4.37364L1.51379 0.259206C1.16776 -0.086402 0.605566 -0.086402 0.259528 0.259206C-0.0865095 0.604814 -0.0865095 1.16631 0.259528 1.51191L3.75196 5L0.259528 8.4881C-0.0865095 8.8337 -0.0865095 9.3952 0.259528 9.7408C0.432545 9.91361 0.65957 10 0.886652 10C1.11373 10 1.34078 9.9136 1.51378 9.7408L5.63333 5.62637C5.97937 5.28076 5.97939 4.71925 5.63335 4.37364Z"
      fill="#9C9C9C"
    />
  </svg>
);

export const ARROW_LEFT_GRAY = (
  <svg
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.259719 4.37364L4.37927 0.259206C4.72531 -0.086402 5.2875 -0.086402 5.63354 0.259206C5.97958 0.604814 5.97958 1.16631 5.63354 1.51191L2.14111 5L5.63354 8.4881C5.97958 8.8337 5.97958 9.3952 5.63354 9.7408C5.46052 9.91361 5.2335 10 5.00641 10C4.77933 10 4.55229 9.9136 4.37929 9.7408L0.259738 5.62637C-0.0862999 5.28076 -0.0862999 4.71927 0.259738 4.37366L0.259719 4.37364Z"
      fill="#9C9C9C"
    />
  </svg>
);

export const MENU_BURGER = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
  </svg>
);

export const MENU_CLOSE = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="white"
    />
  </svg>
);

// data
export const QUOTES = Quotes;
export const INTRODUCTION = {
  name: 'Alex',
  description:
    'I am a frontend developer. I worked with ReactJS, NodeJS and their eco. I would like to work with people which know their job and can share their experience.',
};

export const NAVS = [
  {
    text: 'Home',
    href: '#home',
  },
  {
    text: 'Case studies',
    href: '#case-studies',
  },
  {
    text: 'Testimonials',
    href: '#testimonials',
  },
  {
    text: 'Recent work',
    href: '#recent-work',
  },
  {
    text: 'Get in touch',
    href: '#contact',
  },
];

export const SOCIALS = [
  {
    id: 0,
    href: 'https://www.linkedin.com/in/',
    image: linkedIn,
  },
  {
    id: 1,
    href: 'https://github.com/OleksisBondarenko',
    image: gitHub,
  },
];

export const CLIENTS = [
  {
    id: 0,
    href: '#',
    text: 'html',
    image: html,
  },
  {
    id: 1,
    href: '#',
    text: 'css',
    image: css,
  },
  {
    id: 2,
    href: '/minecraft',
    text: 'js',
    image: js,
  },
  {
    id: 3,
    href: '#',
    text: 'react',
    image: react,
  },
  {
    id: 4,
    href: '#',
    text: 'figma',
    image: figma,
  },
];

export const CASE_STUDIES = {
  header: 'Case Studies',
  text: "A case study is an in-depth study of one person, group, or event. In a case study, nearly every aspect of the subject's life and history is analyzed to seek patterns and causes of behavior.",

  studies: [
    {
      id: 0,
      header: 'Implementation of validation',
      text: 'Validation is very important in application. To be sure about correct working of application you should use field validation. For example to validate username, phone number, email and etc.',
      textTag: 'React, NodeJS',
      colorPrimary: '#FFA217',
      colorSecondary: '#FFF6E9',
      href: '#',
      image: validation,
    },
    {
      id: 1,
      header: 'JWT authentication',
      text: 'JWT or JSON Web Token this is a compact URL-safe means of representation claims to transferred between two parties. It uses to provide authentication in apps.',
      textTag: 'Security',
      colorPrimary: '#000AFF',
      colorSecondary: '#D0E6FF',
      href: '#',
      image: jwt,
    },
    {
      id: 2,
      header: 'Using REST API ',
      text: 'REST API this is an technology which provides interface to transfer information between two sides. As example i use client-server architecture, backend part is express (NodeJS) and frontend part is ReactJS.',
      textTag: 'Fintech',
      colorPrimary: '#2AB090',
      colorSecondary: '#E0FFF8',
      href: '#',
      image: rest,
    },
  ],
};

export const TESTIMONIALS = {
  header: 'Testimonials',
  text: 'All these people are real but images were changed for confident. This is a real feedback.',
  testimonials: [
    {
      id: 0,
      text: 'I needed to improve my sales using webpage and Alex helped me with it. Thank you',
      client: 'Vasil',
      image: Vasil,
      href: '#',
    },
    // This man helped me with creating single page application.
    {
      id: 1,
      text: 'I had problem with my design in HTML. Alex helped me with it very fast, also he showed me how to work with it more professional',
      client: 'Yaroslav',
      image: Yaroslav,
      href: '#',
    },
    {
      id: 2,
      text: "React is my passion but sometimes i make mistakes. One day i made a mistake and i couldn't solve it. I asked Alex to help me with it and he helped.",
      client: 'Dmitriy',
      image: Dmitriy,
      href: '#',
    },
    {
      id: 3,
      text: 'Thank you so much! This man saved me! I had a lot of work and the deadlines were very close. I couldn`t handle it on my own, so i called Alex. I barely kept my job, and  Alex safe it',
      client: 'Alina',
      image: Alina,
      href: '#',
    },
  ],
};

export const RECENT_WORKS = {
  header: 'Recent Work',
  text: 'Solving user and business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  works: [
    {
      id: 0,
      header: 'Product card',
      text: 'This is a product card from figma. It has different states which depends on count in store',
      href: '#',
      image: awesomeCard,
    },
    {
      id: 1,
      header: 'Test task',
      text: 'Make a react application from figma design. To develop this application i used atom design architecture, css modules, redux-toolkit',
      href: '#',
      image: simpleShop,
    },
    // {
    //   id: 2,
    //   header: "Work name here3",
    //   text: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",

    //   href: "#",
    //   image: awesomeCard,
    // },
    // {
    //     id: 3,
    //     header: "Work name here4",
    //     text: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",

    //     href: "#",
    //     image: WORK1,
    // },
    // {
    //     id: 4,
    //     header: "Work name here5",
    //     text: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",

    //     href: "#",
    //     image: WORK1,
    // },
  ],
};

export const CONTACT = {
  header: 'Get In Touch',
  text: 'To contact me you can use this form. I`m kidding you, i have no email server, it`ll be better if you use my email.',
};
