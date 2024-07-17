import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Collapse,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { menuItems } from './menuItems';
import ThemeToggler from './ThemeToggler';

const MotionChevronDownIcon = motion(ChevronDownIcon);
const MotionChevronUpIcon = motion(ChevronUpIcon);

const textColorDefault = 'white'; // Default text color for links
const linkHoverColor = '#00d49f'; // Hover color for links

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const headerBgColor = useColorModeValue('gray.800', 'gray.900'); // Darker background color
  const borderColor = useColorModeValue('gray.700', 'gray.700'); // Slightly darker border color
  const hoverTextColor = useColorModeValue('#00d49f', '#00d49f'); // Lighter hover text color

  const handleCategoryToggle = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <Collapse in={isOpen}>
      <Flex
        direction="column"
        p={4}
        bg={headerBgColor} // Darker background color
        position="fixed" // Fixed to ensure full screen positioning
        top="4rem" // Adjust to the height of your header
        left={0}
        right={0}
        bottom={0} // Full height of the screen
        zIndex={1}
        borderTop="1px"
        borderColor={borderColor} // Darker border color
        as={motion.div} // Apply motion.div for animations
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Top-right corner ThemeToggler */}
        <Flex
          position="absolute"
          top={4} // Adjust as needed
          right={4} // Adjust as needed
          zIndex={2} // Ensure it is above the menu items
        >
          <ThemeToggler />
        </Flex>

        <Flex
          direction="column"
          mt={10} // Add margin top to ensure space below ThemeToggler
        >
          {menuItems.map((category) => (
            <Box key={category.name} mb={4}>
              <Button
                variant="ghost"
                width="full"
                justifyContent="flex-start"
                _hover={{ color: hoverTextColor, bg: 'transparent' }}
                px={4}
                fontWeight="medium"
                rightIcon={
                  activeCategory === category.name ? (
                    <MotionChevronUpIcon
                      color={hoverTextColor}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                    />
                  ) : (
                    <MotionChevronDownIcon
                      color={hoverTextColor}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: -180 }}
                    />
                  )
                }
                color={textColorDefault}
                onClick={() => handleCategoryToggle(category.name)}
                as={motion.button} // Apply motion.button for animations
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </Button>
              <Collapse in={activeCategory === category.name}>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} mt={2}>
                  {category.subItems.map((item) => (
                    <Box
                      key={item.name}
                      as={motion.a} // Apply motion.a for animations
                      href={item.link}
                      p={3}
                      borderRadius="md"
                      _hover={{ color: linkHoverColor, textDecoration: 'none' }}
                      display="block"
                      fontWeight="medium"
                      color={textColorDefault}
                      textAlign="left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {item.name}
                    </Box>
                  ))}
                </SimpleGrid>
              </Collapse>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Collapse>
  );
};

export default MobileMenu;
