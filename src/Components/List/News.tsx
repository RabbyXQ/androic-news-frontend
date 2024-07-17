import React from 'react';
import { Box, Image, Link, Text, Flex, Heading, Button, useBreakpointValue } from '@chakra-ui/react';

// Define a type for the article data
interface Article {
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

const articles: Article[] = [
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
  {
    title: "Prime Day deals are live: Here are the best we’ve found so far",
    description: "",
    author: "Matt Horne",
    imageUrl: "https://www.androidauthority.com/wp-content/uploads/2024/06/Amazon-Prime-Day-2024-graphic-e1719294616746.jpg",
    href: "https://www.androidauthority.com/prime-day-deals-2024-3460969/"
  }
];

const News: React.FC = () => {
  const breakpoint = useBreakpointValue({ base: 'mobile', md: 'tablet', lg: 'pc' });

  const hoverColor = '#00d49f'; // Color to use on hover

  return (
    <Box p={4}>
      <Heading mb={4} fontSize="lg" textAlign="start">News</Heading>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        gap={2}
      >
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.href}
            isExternal
           
            display="flex"
            flexDirection={breakpoint === 'mobile' ? 'row' : 'row'}
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
              direction={breakpoint === 'mobile' ? 'row' : 'row'}
              align="center"
              width="100%"
              flex="1"
              flexDirection="row-reverse" // Move image to the right side
            >
              <Image
                src={article.imageUrl}
                alt={article.title}
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
                  {article.title}
                </Text>
                {article.description && (
                  <Text fontSize={breakpoint === 'mobile' ? 'xs' : 'sm'} mb={1}>
                    {article.description}
                  </Text>
                )}
                <Text fontSize={breakpoint === 'mobile' ? 'xs' : 'sm'} color="gray.500">
                  {article.author}
                </Text>
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

export default News;
