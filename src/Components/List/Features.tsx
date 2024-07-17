import React from 'react';
import { Box, Image, Link, Text, Flex, Heading, Button, useBreakpointValue } from '@chakra-ui/react';

// Define a type for the feature data
interface Feature {
  title: string;
  description: string;
  author: string;
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
      title: "Exclusive: Google Pixel 9 series set for sweeping camera improvements",
      description: "Google is making some major and controversial changes to the cameras in the Pixel 9 series.",
      author: "Kamila Wojciechowska",
      imageUrl: "https://www.androidauthority.com/wp-content/uploads/2024/05/Google-Pixel-9-Pro-angled-front-view-gray.jpg",
      href: "https://www.androidauthority.com/exclusive-google-pixel-9-cameras-3460690/"
    },
    
    {
      title: "I’ve already ditched the new Google Home widget and watch tile",
      description: "",
      author: "Rita El Khoury",
      imageUrl: "https://www.androidauthority.com/wp-content/uploads/2024/07/google-home-homescreen-widget-favorites-scaled.jpg",
      href: "https://www.androidauthority.com/google-home-screen-widget-watch-tile-3457236/"
    },
    {
      title: "Giant Pixel 9 leak gives us our first real-world look at the Fold",
      description: "",
      author: "Kamila Wojciechowska",
      imageUrl: "https://www.androidauthority.com/wp-content/uploads/2024/07/goes-hard.jpg",
      href: "https://www.androidauthority.com/google-pixel-9-pro-fold-ncc-3461263/"
    },
    {
      title: "The OnePlus Watch 2R just made Wear OS with fantastic battery life more accessible",
      description: "",
      author: "Kaitlyn Cimino",
      imageUrl: "https://www.androidauthority.com/wp-content/uploads/2024/07/OnePlus-Watch-2R-Classic-Watch-face-scaled.jpg",
      href: "https://www.androidauthority.com/oneplus-watch-2r-review-3460527/"
    },
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
            flexDirection={index === 0 && breakpoint !== 'mobile' ? 'row' : 'row-reverse'}
            alignItems="stretch"
            borderRadius="md"
            overflow="hidden"
            boxShadow="sm"
            _hover={{ boxShadow: 'md', color: hoverColor }}
            width="100%"
            position="relative"
            css={index === 0 && breakpoint !== 'mobile' ? {} : (breakpoint === 'mobile' ? {
              '&:after': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '6px', // Thickness of the color bar
                backgroundColor: getRandomColor(), // Random color for the left bar
              }
            } : {})}
            
          >
            <Flex
              direction={index === 0 && breakpoint !== 'mobile' ? 'row' : 'row-reverse'}
              align="center"
              width="100%"
              flex="1"
            >
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                objectFit="cover"
                width={
                  index === 0 && breakpoint !== 'mobile' ? '300px' : (breakpoint === 'mobile' ? '100px' : '150px')
                } // Larger image for the first item on larger screens
                height={
                  index === 0 && breakpoint !== 'mobile' ? '300px' : (breakpoint === 'mobile' ? '100px' : '150px')
                } // Larger image for the first item on larger screens
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
