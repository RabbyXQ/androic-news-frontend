import React from 'react';
import { Box, Image, Link, Text, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';

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

const Apps: React.FC = () => {
  const breakpoint = useBreakpointValue({ base: 'mobile', md: 'tablet', lg: 'pc' });

  return (
    <Box p={4}>
      <Heading mb={4} fontSize="lg" textAlign="start">Apps</Heading>
      <Box
        display={breakpoint === 'mobile' ? 'block' : 'flex'}
        flexDirection={breakpoint === 'mobile' ? 'column' : 'row'}
        alignItems={breakpoint === 'mobile' ? 'stretch' : 'center'}
        overflowX={breakpoint === 'mobile' ? 'hidden' : 'auto'}
        whiteSpace={breakpoint === 'mobile' ? 'normal' : 'nowrap'}
        gap={breakpoint === 'mobile' ? 2 : 4}
        css={{
          /* Hide scrollbar for PC but still allow scrolling */
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none' as any, /* IE and Edge */
          scrollbarWidth: 'none' /* Firefox */
        }}
      >
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.href}
            isExternal
            _hover={{ textDecoration: 'none' }}
            display="block"
            width={breakpoint === 'mobile' ? 'full' : breakpoint === 'tablet' ? '220px' : '240px'}
            mx={breakpoint === 'mobile' ? 0 : 2}
          >
            <Box
              borderWidth="0" // No border
              borderRadius="md"
              overflow="hidden"
              boxShadow="sm"
              _hover={{ boxShadow: 'md', borderColor: '#00d49f' }} // Change border color on hover
              width="100%"
              mb={breakpoint === 'mobile' ? 2 : 0}
              display={breakpoint === 'mobile' && index > 0 ? 'flex' : 'block'}
              flexDirection={breakpoint === 'mobile' && index > 0 ? 'row' : 'column'}
              alignItems={breakpoint === 'mobile' && index > 0 ? 'center' : 'stretch'}
              position="relative"
              borderRightWidth={breakpoint === 'mobile' && index > 0 ? '5px' : '0'} // Border for mobile posts except the first one
              borderRightColor={breakpoint === 'mobile' && index > 0 ? getRandomColor() : 'transparent'} // Random color for mobile posts
            >
              <Image
                src={article.imageUrl}
                alt={article.title}
                objectFit="cover"
                width={breakpoint === 'mobile' && index > 0 ? '80px' : '100%'}
                height={breakpoint === 'mobile' && index > 0 ? '80px' : '120px'}
              />
              <Box p={2}>
                <Text
                  fontSize={breakpoint === 'mobile' ? 'sm' : 'md'}
                  fontWeight="bold"
                  mb={1}
                  _hover={{ color: '#00d49f' }} // Change title color on hover
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
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Apps;
