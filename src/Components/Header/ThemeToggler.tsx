import React from 'react';
import { Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionSpan = motion.span;

const ThemeToggler: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex
      align="center"
      mx="5"
      borderColor={borderColor}
    >
      <label
        title={colorMode === 'dark' ? "Activate light mode" : "Activate dark mode"}
        aria-label={colorMode === 'dark' ? "Activate light mode" : "Activate dark mode"}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          position: 'relative',
          width: '60px',
          height: '30px',
          backgroundColor: colorMode === 'dark' ? '#4A5568' : '#E2E8F0',
          borderRadius: '17px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s',
        }}
      >
        <input
          type="checkbox"
          checked={colorMode === 'dark'}
          onChange={toggleColorMode}
          style={{ display: 'none' }}
        />
        <MotionDiv
          style={{
            position: 'absolute',
            top: '50%',
            left: colorMode === 'dark' ? 'calc(100% - 30px)' : '4px',
            transform: 'translateY(-50%)',
            width: '26px',
            height: '26px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          animate={{ left: colorMode === 'dark' ? 'calc(100% - 30px)' : '4px' }}
          transition={{ duration: 0.3 }}
        />
        <MotionSpan
          style={{
            position: 'absolute',
            top: '50%',
            left: '8px',
            transform: 'translateY(-50%)',
            color: colorMode === 'dark' ? '#F7FAFC' : '#2D3748',
          }}
          animate={{ color: colorMode === 'dark' ? '#F7FAFC' : '#2D3748' }}
          transition={{ duration: 0.3 }}
        >
          <MoonIcon />
        </MotionSpan>
        <MotionSpan
          style={{
            position: 'absolute',
            top: '50%',
            right: '8px',
            transform: 'translateY(-50%)',
            color: colorMode === 'dark' ? '#F7FAFC' : '#2D3748',
          }}
          animate={{ color: colorMode === 'dark' ? '#F7FAFC' : '#2D3748' }}
          transition={{ duration: 0.3 }}
        >
          <SunIcon />
        </MotionSpan>
      </label>
    </Flex>
  );
};

export default ThemeToggler;
