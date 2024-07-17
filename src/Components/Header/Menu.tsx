import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { menuItems } from './menuItems';

const MotionChevronDownIcon = motion(ChevronDownIcon);
const MotionChevronUpIcon = motion(ChevronUpIcon);

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryToggle = (categoryName: string) => {
    setActiveCategory((prevCategory) => (prevCategory === categoryName ? null : categoryName));
  };

  const textColorDefault = useColorModeValue('gray.700', 'white');
  const menuHoverColor = useColorModeValue('black', '#00d49f');
  const submenuLinkColor = 'white';
  const submenuLinkHoverColor = '#00d49f';
  const arrowColor = useColorModeValue('#00d49f', '#00d49f');

  return (
    <HStack spacing={4} align="flex-start">
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
              _hover={{ color: menuHoverColor, bg: 'transparent' }}
              px={4}
              fontWeight="medium"
              rightIcon={
                activeCategory === category.name ? (
                  <MotionChevronUpIcon
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    color={menuHoverColor}
                  />
                ) : (
                  <MotionChevronDownIcon
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -180 }}
                    transition={{ duration: 0.3 }}
                    color={menuHoverColor}
                  />
                )
              }
              color={textColorDefault}
              onClick={() => handleCategoryToggle(category.name)}
            >
              {category.name}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            width="800px" // Increased width for the submenu
            p={4}
            bg="rgba(0, 0, 0, 0.6)"
            backdropFilter="blur(10px)"
            boxShadow="lg"
            borderRadius="md"
            borderWidth="0"
          >
            <PopoverArrow
              bg={arrowColor}
              borderColor={arrowColor}
            />
            <PopoverBody p={0}>
              <SimpleGrid columns={3} spacing={3}> {/* Adjusted to 3 columns */}
                {category.subItems.map((item) => (
                  <Box
                    key={item.name}
                    as="a"
                    href={item.link}
                    p={2}
                    borderRadius="md"
                    _hover={{ color: submenuLinkHoverColor, textDecoration: 'none' }}
                    display="block"
                    fontWeight="medium"
                    color={submenuLinkColor}
                  >
                    {item.name}
                  </Box>
                ))}
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ))}
    </HStack>
  );
};

export default Menu;
