import React from 'react';
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

const Head: React.FC = () => {
  const { isOpen: isMenuOpen, onToggle: onMenuToggle } = useDisclosure();
  const headerBgColor = useColorModeValue('white', 'gray.900'); // Adjusted for accurate color usage
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Determine if the view should be mobile or desktop
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  return (
    <Flex
      as="header"
      p={2}
      bg={headerBgColor}
      align="center"
      justify="space-between"
      borderBottom="4px"
      borderColor={borderColor}
      position="relative"
      wrap="wrap"
    >
      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton
          aria-label="Toggle Menu"
          icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onMenuToggle}
          variant="ghost" // Use ghost variant to remove border
          mr={4}
        />
      )}

      {/* Logo or Brand Name */}
      <Box fontSize="xl" fontWeight="bold" flexShrink={0}>
        AndroidHorizon
      </Box>

      {/* Desktop Menu Items */}
      <Flex
        display={{ base: 'none', md: 'none', lg: 'flex' }}
        align="center"
        flexGrow={1}
        justify="center"
      >
        <Menu />
      </Flex>

      {/* Search Bar and Search Icon */}
      <Search />

      {/* Mobile Menu Items */}
      {isMobile && (
        <MobileMenu isOpen={isMenuOpen} onToggle={onMenuToggle} />
      )}

      {/* Theme Toggler */}
      <Flex display={{base: 'none', md: 'flex'}} align="center">
        <ThemeToggler />
      </Flex>
    </Flex>
  );
};

export default Head;
