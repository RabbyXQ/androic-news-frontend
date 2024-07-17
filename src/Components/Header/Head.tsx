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
import MobileMenu from './MobileMenu'; // Import the new MobileMenu component
import Menu from './Menu'; // Import the new Menu component
import AvatarWithMenu from './AvatarWithMenu'; // Import the new AvatarWithMenu component
import UserNav from '../Nav/UserNav';

const Head: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isOpen: isMenuOpen, onToggle: onMenuToggle } = useDisclosure();
  const headerBgColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  const handleLogin = () => {
    // Add your login logic here
    setIsLoggedIn(true);
  };

  return (
    <>
    <Flex
      as="header"
      p={2}
      bg={headerBgColor}
      align="center"
      justify="space-between"
      borderColor={borderColor}
      position="relative"
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
    </>
  );
};

export default Head;
