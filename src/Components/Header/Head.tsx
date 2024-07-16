import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Button,
  Input,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Collapse,
  HStack,
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Card,
  CardBody,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon, SearchIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

// Define colors
const androidGreen = '#A4C639';
const textColorDefault = 'gray.600'; // Default text color

// Dynamic hover color based on color mode
const textColorHover = (colorMode: 'light' | 'dark') =>
  colorMode === 'light' ? 'gray.800' : 'white';

// Sample menu items with submenus
const menuItems = [
  {
    name: 'Category 1',
    subItems: [
      { name: 'Item 1', link: '#' },
      { name: 'Item 2', link: '#' },
      { name: 'Item 3', link: '#' },
      { name: 'Item 4', link: '#' },
    ],
  },
  {
    name: 'Category 2',
    subItems: [
      { name: 'Item 5', link: '#' },
      { name: 'Item 6', link: '#' },
      { name: 'Item 7', link: '#' },
      { name: 'Item 8', link: '#' },
    ],
  },
  {
    name: 'Category 3',
    subItems: [
      { name: 'Item 9', link: '#' },
      { name: 'Item 10', link: '#' },
      { name: 'Item 11', link: '#' },
      { name: 'Item 12', link: '#' },
    ],
  },
  {
    name: 'Category 4',
    subItems: [
      { name: 'Item 13', link: '#' },
      { name: 'Item 14', link: '#' },
      { name: 'Item 15', link: '#' },
      { name: 'Item 16', link: '#' },
    ],
  },
];

const Head: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isMenuOpen, onToggle: onMenuToggle } = useDisclosure();
  const { isOpen: isSearchOpen, onToggle: onSearchToggle } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Use useBreakpointValue to determine if the view is mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleCategoryToggle = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <Flex
      as="header"
      p={4}
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="space-between"
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      position="relative"
    >
      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton
          aria-label="Toggle Menu"
          icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onMenuToggle}
          variant="outline"
          mr={4}
        />
      )}

      {/* Logo or Brand Name */}
      <Box fontSize="xl" fontWeight="bold" display={{ base: 'none', md: 'block' }}>
        MyBrand
      </Box>

      {/* Desktop Menu */}
      <Flex display={{ base: 'none', md: 'flex' }} align="center">
        <HStack spacing={4}>
          {menuItems.map((category) => (
            <Popover
              key={category.name}
              trigger="hover"
              placement="bottom-start"
              isOpen={activeCategory === category.name}
              onClose={() => setActiveCategory(null)}
            >
              <PopoverTrigger>
                <Button
                  variant="ghost"
                  _hover={{ color: textColorHover(colorMode), bg: 'transparent' }}
                  px={4}
                  fontWeight="medium"
                  rightIcon={activeCategory === category.name ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  color={textColorDefault}
                  onClick={() => handleCategoryToggle(category.name)}
                >
                  {category.name}
                </Button>
              </PopoverTrigger>
              <PopoverContent width="auto" maxW="600px" p={4} boxShadow="lg" borderRadius="md" borderWidth="0">
                <PopoverArrow />
                <PopoverBody p={0}>
                  <Card variant="outline" boxShadow="none" borderWidth="0">
                    <CardBody>
                      <Heading size="md" mb={4} fontWeight="bold">
                        {category.name}
                      </Heading>
                      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                        {category.subItems.map((item) => (
                          <Box
                            key={item.name}
                            as="a"
                            href={item.link}
                            p={3}
                            borderRadius="md"
                            _hover={{ color: textColorHover(colorMode), textDecoration: 'none' }}
                            display="block"
                            fontWeight="medium"
                            color={textColorDefault}
                          >
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
        </HStack>
        <Input
          placeholder="Search..."
          width="auto"
          ml={4}
          maxW="300px"
          variant="outline"
          size="sm"
        />
      </Flex>

      {/* Mobile Search */}
      {isMobile && (
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
              variant="outline"
              size="sm"
            />
          </Collapse>
        </Flex>
      )}

      {/* Color Mode Toggle */}
      <IconButton
        aria-label="Toggle Color Mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="outline"
      />
    </Flex>
  );
};

export default Head;
