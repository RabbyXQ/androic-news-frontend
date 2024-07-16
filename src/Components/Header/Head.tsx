import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Input,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Collapse,
  Button,
  useBreakpointValue,
  HStack,
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Card,
  CardBody,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon, SearchIcon } from '@chakra-ui/icons';

const menuItems = [
  {
    name: 'Category 1',
    subItems: [
      { name: 'Item 1', link: '#' },
      { name: 'Item 2', link: '#' },
    ],
  },
  {
    name: 'Category 2',
    subItems: [
      { name: 'Item 3', link: '#' },
      { name: 'Item 4', link: '#' },
    ],
  },
  {
    name: 'Category 3',
    subItems: [
      { name: 'Item 5', link: '#' },
      { name: 'Item 6', link: '#' },
    ],
  },
  {
    name: 'Category 4',
    subItems: [
      { name: 'Item 7', link: '#' },
      { name: 'Item 8', link: '#' },
    ],
  },
];

const Head: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isMenuOpen, onToggle: onMenuToggle } = useDisclosure();
  const { isOpen: isSearchOpen, onToggle: onSearchToggle } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="header"
      p={4}
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="space-between"
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Flex align="center">
        {isMobile && (
          <IconButton
            aria-label="Toggle Menu"
            icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onMenuToggle}
            variant="outline"
            mr={4}
          />
        )}
        <DesktopMenu menuItems={menuItems} />
      </Flex>

      {isMobile && (
        <MobileSearch
          isSearchOpen={isSearchOpen}
          onSearchToggle={onSearchToggle}
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      )}

      <ToggleColorModeButton colorMode={colorMode} toggleColorMode={toggleColorMode} />
    </Flex>
  );
};

const DesktopMenu: React.FC<{ menuItems: typeof menuItems }> = ({ menuItems }) => (
  <HStack spacing={4} display={{ base: 'none', md: 'flex' }} ml="auto">
    {menuItems.map((category) => (
      <Popover trigger="hover" key={category.name}>
        <PopoverTrigger>
          <Button variant="ghost">{category.name}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Card>
              <CardBody>
                <Heading size="md" mb={4}>{category.name}</Heading>
                <SimpleGrid columns={2} spacing={4}>
                  {category.subItems.map((item) => (
                    <Box key={item.name} as="a" href={item.link} p={2}>
                      {item.name}
                    </Box>
                  ))}
                </SimpleGrid>
              </CardBody>
            </Card>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    ))}
    <Input placeholder="Search..." width="auto" />
  </HStack>
);

const MobileSearch: React.FC<{
  isSearchOpen: boolean;
  onSearchToggle: () => void;
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ isSearchOpen, onSearchToggle, searchTerm, handleSearchChange }) => (
  <Flex align="center" ml={{ base: 'auto', md: 0 }}>
    <IconButton
      aria-label="Search"
      icon={<SearchIcon />}
      variant="outline"
      mr={2}
      onClick={onSearchToggle}
    />
    <Collapse in={isSearchOpen}>
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        width="100%"
        mt={2}
      />
    </Collapse>
  </Flex>
);

const ToggleColorModeButton: React.FC<{
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
}> = ({ colorMode, toggleColorMode }) => (
  <IconButton
    aria-label="Toggle Color Mode"
    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    onClick={toggleColorMode}
    variant="outline"
  />
);

export default Head;
