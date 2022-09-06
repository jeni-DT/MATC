import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from "react-icons/fc";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports1',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  
  {
    title: 'Category ',
    path: '/category ',
    icon: <FcIcons.FcList />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Icecreams',
        path: '/category/icecream',
        icon: <FcIcons.FcList  />,
        iconClosed: <IoIcons.IoMdArrowDropdown />,
        iconOpened: <IoIcons.IoMdArrowDropup />,

        subNavMenus :[
          {
            title: "Vanilla",
            path: "/icecream/vanilla",
            icon: <IoIcons.IoIosIceCream/>,
          },
          {
            title: "Chocolate",
            path: "/icecream/chocolate",
            icon: <IoIcons.IoIosIceCream />,
          },
        ],
      },
     
    ]
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FcIcons.FcCallback />
  }
];
