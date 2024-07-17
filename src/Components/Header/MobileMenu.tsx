import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Collapse,
  SimpleGrid,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { menuItems } from './menuItems';
import ThemeToggler from './ThemeToggler';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const MotionChevronDownIcon = motion(ChevronDownIcon);
const MotionChevronUpIcon = motion(ChevronUpIcon);

const textColorDefault = 'white';
const linkHoverColor = '#00d49f';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const headerBgColor = useColorModeValue('gray.800', 'gray.900');
  const borderColor = useColorModeValue('gray.700', 'gray.700');
  const hoverTextColor = useColorModeValue(linkHoverColor, linkHoverColor);

  const handleCategoryToggle = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <Collapse in={isOpen}>
      <Flex
        direction="column"
        p={4}
        bg={headerBgColor}
        position="fixed"
        top="4rem"
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
        borderColor={borderColor}
        as={motion.div}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Flex
          position="absolute"
          top={4}
          right={4}
          zIndex={2}
          display={{ base: 'flex', md: 'none' }}
        >
          <ThemeToggler />
        </Flex>

        <Flex direction="column" mt={10}>
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
                as={motion.button}
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
                      as={motion.a}
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

        <Flex
          direction="row"
          justify="center"
          align="center"
          position="absolute"
          bottom={4}
          left={0}
          right={0}
          zIndex={2}
        >
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            color="white"
            size="lg"
            mx={2}
            _hover={{ color: linkHoverColor }}
          />
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            color="white"
            size="lg"
            mx={2}
            _hover={{ color: linkHoverColor }}
          />
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            color="white"
            size="lg"
            mx={2}
            _hover={{ color: linkHoverColor }}
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            color="white"
            size="lg"
            mx={2}
            _hover={{ color: linkHoverColor }}
          />
        </Flex>
      </Flex>
    </Collapse>
  );
};

export default MobileMenu;
