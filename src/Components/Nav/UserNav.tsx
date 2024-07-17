import React, { useState } from 'react';
import { Flex, Button, Text, Box, useBreakpointValue, useColorMode, useColorModeValue, Badge } from '@chakra-ui/react';
import { MdDashboard, MdPerson, MdNotifications, MdMessage, MdPeople } from 'react-icons/md';

interface NavItem {
  ariaLabel: string;
  icon: React.ReactElement;
  label: string;
  count?: number; // Optional count property
}

const navItems: NavItem[] = [
  { ariaLabel: 'Dashboard', icon: <MdDashboard />, label: 'Dashboard' },
  { ariaLabel: 'Profile', icon: <MdPerson />, label: 'Profile' },
  { ariaLabel: 'Notifications', icon: <MdNotifications />, label: 'Notifications', count: 5 }, // Example count
  { ariaLabel: 'Messages', icon: <MdMessage />, label: 'Messages', count: 12 }, // Example count
  { ariaLabel: 'Connections', icon: <MdPeople />, label: 'Connections', count: 3 }, // Example count
];

const UserNav: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const buttonColorScheme = '#00d49f';
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('black', 'white');
  const buttonHoverBg = useColorModeValue(buttonColorScheme, 'rgba(0, 212, 159, 0.8)');

  const handleLogin = () => {
    // Add your login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Add your logout logic here
    setIsLoggedIn(false);
  };

  const handleRegister = () => {
    // Add your registration logic here
    // For example, you could open a registration modal or navigate to a registration page
    alert("Registration functionality is not yet implemented.");
  };

  return (
    <Box
      overflowX="auto"
      whiteSpace="nowrap"
      px={4}
      py={2}
      bg={bgColor}
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <Flex
        direction="row"
        align="center"
        justify={isMobile ? "flex-start" : "center"}
        gap={isMobile ? 2 : 4}
        wrap="nowrap"
        px={isMobile ? 1 : 2}
      >
        {isLoggedIn ? (
          navItems.map(({ ariaLabel, icon, label, count }) => (
            <Button
              key={ariaLabel}
              aria-label={ariaLabel}
              leftIcon={React.cloneElement(icon, { size: isMobile ? '16px' : '24px' })}
              variant="outline"
              borderColor={buttonColorScheme}
              color={buttonColorScheme}
              _hover={{ bg: buttonHoverBg, color: 'white' }}
              _focus={{ boxShadow: 'none' }}
              size={isMobile ? 'xs' : 'sm'}
              display="flex"
              alignItems="center"
              gap={isMobile ? 1 : 2}
              px={isMobile ? 1 : 2}
              py={isMobile ? 1 : 2}
              minW={isMobile ? 'auto' : '120px'}
            >
              <Flex align="center">
                <Text fontSize={isMobile ? 'xs' : 'sm'} color={textColor}>{label}</Text>
                {count !== undefined && count > 0 && (
                  <Badge
                    ml={2}
                    fontSize={isMobile ? 'xs' : 'sm'}
                    colorScheme="teal"
                  >
                    {count}
                  </Badge>
                )}
              </Flex>
            </Button>
          ))
        ) : (
          <>
            <Button
              aria-label="Login"
              onClick={handleLogin}
              variant="outline"
              borderColor={buttonColorScheme}
              color={buttonColorScheme}
              _hover={{ bg: buttonHoverBg, color: 'white' }}
              _focus={{ boxShadow: 'none' }}
              size={isMobile ? 'xs' : 'sm'}
            >
              <Text fontSize={isMobile ? 'xs' : 'sm'} color={textColor}>Login</Text>
            </Button>
            <Button
              aria-label="Register"
              onClick={handleRegister}
              variant="outline"
              borderColor={buttonColorScheme}
              color={buttonColorScheme}
              _hover={{ bg: buttonHoverBg, color: 'white' }}
              _focus={{ boxShadow: 'none' }}
              size={isMobile ? 'xs' : 'sm'}
            >
              <Text fontSize={isMobile ? 'xs' : 'sm'} color={textColor}>Register</Text>
            </Button>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default UserNav;
