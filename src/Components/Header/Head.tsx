import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ThemeToggler from './ThemeToggler';
import Search from './Search';
import MobileMenu from './MobileMenu';
import Menu from './Menu';
import AvatarWithMenu from './AvatarWithMenu';
import UserNav from '../Nav/UserNav';

// Define color palette
const colors = {
  lightMode: {
    headerBg: '#ffffff',
    borderColor: '#e2e8f0',
    hoverColor: '#138021',
  },
  darkMode: {
    headerBg: '#1a202c',
    borderColor: '#2d3748',
    hoverColor: '#3dd382',
  },
};

const Head: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isOpen: isMenuOpen, onToggle: onMenuToggle } = useDisclosure();
  const headerBgColor = useColorModeValue(colors.lightMode.headerBg, colors.darkMode.headerBg);
  const borderColor = useColorModeValue(colors.lightMode.borderColor, colors.darkMode.borderColor);

  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  const handleLogin = () => {
    // Add your login logic here
    setIsLoggedIn(true);
  };

  return (
    <Flex
      as="header"
      p={2}
      bg={headerBgColor}
      align="center"
      justify="space-between"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={10}
      wrap="wrap"
    >
      {isMobile && (
        <IconButton
          aria-label="Toggle Menu"
          icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onMenuToggle}
          variant="ghost"
          mr={4}
        />
      )}

      <Flex
        align="center"
        flexGrow={1}
        justify="flex-start"
        display={{ base: 'none', md: 'flex' }}
      >
        <Box px={4} fontSize="xl" fontWeight="bold" flexShrink={0}>
          Android Horizon
        </Box>
      </Flex>

      <Flex
        align="center"
        display={{ base: 'flex', md: 'none' }}
      >
        <Box
          display={{ base: 'block', md: 'none' }}
          fontSize="xl"
          fontWeight="bold"
          flexShrink={0}
        >
          AH
        </Box>
      </Flex>

      <Flex
        display={{ base: 'none', md: 'none', lg: 'flex' }}
        align="center"
        flexGrow={1}
        justify="center"
      >
        <Menu />
      </Flex>

      <Search />

      <Flex
        align="center"
        display={{ base: 'none', md: 'flex', lg: 'flex' }}
        ml={4}
      >
        <AvatarWithMenu isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        <ThemeToggler />
      </Flex>

      {isMobile && (
        <MobileMenu isOpen={isMenuOpen} onToggle={onMenuToggle} />
      )}
    </Flex>
  );
};

export default Head;
