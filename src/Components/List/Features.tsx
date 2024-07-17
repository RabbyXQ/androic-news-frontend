import React from 'react';
import { Box, Image, Link, Text, Flex, Heading, Button, useBreakpointValue } from '@chakra-ui/react';

// Define a type for the feature data
interface Feature {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const features: Feature[] = [
  {
    title: "Feature 1: Innovative Design",
    description: "Our new feature brings cutting-edge design and functionality.",
    imageUrl: "https://via.placeholder.com/150",
    href: "https://example.com/feature1"
  },
  {
    title: "Feature 2: Enhanced Performance",
    description: "Experience unprecedented performance with our latest updates.",
    imageUrl: "https://via.placeholder.com/150",
    href: "https://example.com/feature2"
  },
  {
    title: "Feature 3: User-Friendly Interface",
    description: "A more intuitive and user-friendly interface for seamless navigation.",
    imageUrl: "https://via.placeholder.com/150",
    href: "https://example.com/feature3"
  },
  {
    title: "Feature 4: Advanced Security",
    description: "Your data is safer than ever with our advanced security features.",
    imageUrl: "https://via.placeholder.com/150",
    href: "https://example.com/feature4"
  },
  {
    title: "Feature 5: Customizable Options",
    description: "Tailor the experience to your needs with our new customizable options.",
    imageUrl: "https://via.placeholder.com/150",
    href: "https://example.com/feature5"
  }
];

const Features: React.FC = () => {
  const breakpoint = useBreakpointValue({ base: 'mobile', md: 'tablet', lg: 'pc' });

  const hoverColor = '#00d49f'; // Color to use on hover

  return (
    <Box p={4}>
      <Heading mb={4} fontSize="lg" textAlign="start">Features</Heading>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        gap={2}
      >
        {features.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            isExternal
            display="flex"
            flexDirection={breakpoint === 'mobile' ? 'row-reverse' : 'row-reverse'}
            alignItems="stretch"
            borderRadius="md"
            overflow="hidden"
            boxShadow="sm"
            _hover={{ boxShadow: 'md', color: hoverColor }}
            mb={2}
            width="100%"
            position="relative"
            css={breakpoint === 'mobile' ? {
              '&:after': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '5px', // Thickness of the color bar
                backgroundColor: getRandomColor(), // Random color for the left bar
              }
            } : {}}
          >
            <Flex
              direction={breakpoint === 'mobile' ? 'row-reverse' : 'row-reverse'}
              align="center"
              width="100%"
              flex="1"
            >
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                objectFit="cover"
                width={breakpoint === 'mobile' ? '100px' : '150px'} // Image size for mobile and larger screens
                height={breakpoint === 'mobile' ? '100px' : '150px'}
              />
              <Box p={2} flex="1">
                <Text
                  fontSize={breakpoint === 'mobile' ? 'sm' : 'md'}
                  fontWeight="bold"
                  mb={1}
                  _hover={{ color: hoverColor }}
                >
                  {feature.title}
                </Text>
                {feature.description && (
                  <Text fontSize={breakpoint === 'mobile' ? 'xs' : 'sm'} mb={1}>
                    {feature.description}
                  </Text>
                )}
              </Box>
            </Flex>
          </Link>
        ))}
        <Button
          mt={4}
          colorScheme="teal"
          variant="solid"
          bg={hoverColor}
          color="black"
          _hover={{ bg: hoverColor, color: 'white' }}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default Features;
