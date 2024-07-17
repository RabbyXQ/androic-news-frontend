import React from 'react';
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa'; // Import a user icon

interface AvatarWithMenuProps {
  isLoggedIn: boolean; // Flag to check if user is logged in
  onLogin: () => void; // Function to handle login
}

const AvatarWithMenu: React.FC<AvatarWithMenuProps> = ({ isLoggedIn, onLogin }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Flex align="center">
      <Tooltip label={isLoggedIn ? 'Profile Menu' : 'Login'} aria-label="Avatar Tooltip">
        <Menu>
          <MenuButton
            as={Button}
            variant="outline"
            colorScheme="blue"
            leftIcon={
              isLoggedIn ? (
                <Avatar
                  name="Profile"
                  src="https://bit.ly/dan-abramov"
                  size="sm"
                  bg={bgColor}
                  color={textColor}
                />
              ) : (
                <FaUser />
              )
            }
            rightIcon={isLoggedIn ? <ChevronDownIcon /> : undefined}
            onClick={!isLoggedIn ? onLogin : undefined}
            cursor="pointer"
            ml={4}
            bg={bgColor}
            color={textColor}
            border="none" // Remove border
            _hover={{ bg: '#00d49f', color: 'white' }} // Hover color scheme
            _focus={{ boxShadow: 'none' }} // Remove focus shadow
          >
            {!isLoggedIn ? 'Login' : undefined}
          </MenuButton>
          {isLoggedIn && (
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          )}
        </Menu>
      </Tooltip>
    </Flex>
  );
};

export default AvatarWithMenu;
