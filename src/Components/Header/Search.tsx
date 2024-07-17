import React, { useState } from 'react';
import {
  Flex,
  IconButton,
  Input,
  Collapse,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  const borderColor = '#00d49f'; // Set the search bar border color
  const hoverTextColor = useColorModeValue('gray.800', 'white');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleSearchVisibility = () => {
    if (searchVisible && !searchTerm) {
      setSearchVisible(false); // Hide search input if there's no text
    } else {
      setSearchVisible(true); // Show search input
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    // Hide search input after clearing the search term
    if (searchVisible) {
      setSearchVisible(false);
    }
  };

  return (
    <Flex
      align="center"
      ml={4}
      flexGrow={1}
      justify="flex-end"
      position="relative"
    >
      <Flex
        align="center"
        ml={4}
        position="absolute"
        right={0}
        zIndex={10}
      >
        <Collapse in={searchVisible}>
          <Flex
            align="center"
            width="auto"
            maxW="300px"
            position="relative"
          >
            <Input
              placeholder="Search..."
              variant="outline"
              size="sm"
              borderRadius="full"
              borderColor={borderColor}
              transition="border-color 0.2s"
              _focus={{ borderColor: hoverTextColor }}
              value={searchTerm}
              onChange={handleSearchChange}
              mr={2}
            />
            {searchTerm && (
              <IconButton
                aria-label="Clear Search"
                icon={<CloseIcon />}
                variant="ghost"
                onClick={clearSearch}
                position="absolute"
                right={2}
                top="50%"
                transform="translateY(-50%)"
              />
            )}
          </Flex>
        </Collapse>
        <IconButton
          aria-label={searchVisible ? 'Close Search' : 'Search'}
          icon={searchVisible ? <CloseIcon /> : <SearchIcon />}
          variant="ghost"
          onClick={toggleSearchVisibility}
          _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }} // Adjust background on hover
        />
      </Flex>
    </Flex>
  );
};

export default Search;
