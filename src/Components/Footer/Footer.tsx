import React from 'react';
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Text,
  VStack,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaGoogle } from 'react-icons/fa';

const Footer: React.FC = () => {
  const footerBgColor = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const hoverColor = useColorModeValue('#00d49f', '#00d49f');
  const copyrightBgColor = useColorModeValue('white', 'black');
  const copyrightTextColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <>
      <Box
        bg={footerBgColor}
        color={textColor}
        py={6}
        position="relative"
        marginX="auto"
        paddingX={{ base: '4', md: '6', lg: '8' }}
      >
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="flex-start" mb={6}>
            {/* Column 1: Logo, Social Media Links, and Navigation Links */}
            <VStack spacing={3} align="start" flex={1}>
              <Link href="/" rel="home">
                <Image
                  src="https://androidpolice.com/public/build/images/ap-logo-symbol-white.svg?v=2.4"
                  alt="Android Police logo"
                  boxSize="120px"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <VStack spacing={2} align="start">
                <Link href="/work-with-us/" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">Join Our Team</Link>
                <Link href="/page/advertise/" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">Our Audience</Link>
                <Link href="/page/about/" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">About Us</Link>
                <Link href="/page/press-events/" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">Press & Events</Link>
                <Link href="/contact/" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">Contact Us</Link>
              </VStack>
              {/* Social Media Links */}
              <VStack spacing={3} align="start" display={{ base: 'flex', md: 'none' }}>
                <Text fontWeight="bold" fontSize="sm">Follow Us</Text>
                <HStack spacing={3}>
                  <IconButton
                    aria-label="YouTube"
                    icon={<FaYoutube />}
                    as={Link}
                    href="https://www.youtube.com/AndroidPolice"
                    target="_blank"
                    variant="ghost"
                    color={textColor}
                    _hover={{ color: hoverColor }}
                    size="sm"
                  />
                  <IconButton
                    aria-label="Facebook"
                    icon={<FaFacebook />}
                    as={Link}
                    href="https://www.facebook.com/AndroidPolice"
                    target="_blank"
                    variant="ghost"
                    color={textColor}
                    _hover={{ color: hoverColor }}
                    size="sm"
                  />
                  <IconButton
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    as={Link}
                    href="https://www.instagram.com/androidpolice/"
                    target="_blank"
                    variant="ghost"
                    color={textColor}
                    _hover={{ color: hoverColor }}
                    size="sm"
                  />
                  <IconButton
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    as={Link}
                    href="https://twitter.com/AndroidPolice"
                    target="_blank"
                    variant="ghost"
                    color={textColor}
                    _hover={{ color: hoverColor }}
                    size="sm"
                  />
                  <IconButton
                    aria-label="TikTok"
                    icon={<FaTiktok />}
                    as={Link}
                    href="https://www.tiktok.com/@realandroidpolice"
                    target="_blank"
                    variant="ghost"
                    color={textColor}
                    _hover={{ color: hoverColor }}
                    size="sm"
                  />
                  <IconButton
                    aria-label="Google News"
                    icon={<FaGoogle />}
                    as={Link}
                    href="https://news.google.com/publications/CAAqBggKMLuYFDDSzAI"
                    target="_blank"
                    variant="ghost"
                    color={textColor}
                    _hover={{ color: hoverColor }}
                    size="sm"
                  />
                </HStack>
              </VStack>
            </VStack>

            {/* Column 2: Social Media Links */}
            <VStack spacing={3} align="start" flex={1} display={{ base: 'none', md: 'flex' }}>
              <Text fontWeight="bold" fontSize="sm">Follow Us</Text>
              <HStack spacing={3}>
                <IconButton
                  aria-label="YouTube"
                  icon={<FaYoutube />}
                  as={Link}
                  href="https://www.youtube.com/AndroidPolice"
                  target="_blank"
                  variant="ghost"
                  color={textColor}
                  _hover={{ color: hoverColor }}
                  size="sm"
                />
                <IconButton
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  as={Link}
                  href="https://www.facebook.com/AndroidPolice"
                  target="_blank"
                  variant="ghost"
                  color={textColor}
                  _hover={{ color: hoverColor }}
                  size="sm"
                />
                <IconButton
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  as={Link}
                  href="https://www.instagram.com/androidpolice/"
                  target="_blank"
                  variant="ghost"
                  color={textColor}
                  _hover={{ color: hoverColor }}
                  size="sm"
                />
                <IconButton
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  as={Link}
                  href="https://twitter.com/AndroidPolice"
                  target="_blank"
                  variant="ghost"
                  color={textColor}
                  _hover={{ color: hoverColor }}
                  size="sm"
                />
                <IconButton
                  aria-label="TikTok"
                  icon={<FaTiktok />}
                  as={Link}
                  href="https://www.tiktok.com/@realandroidpolice"
                  target="_blank"
                  variant="ghost"
                  color={textColor}
                  _hover={{ color: hoverColor }}
                  size="sm"
                />
                <IconButton
                  aria-label="Google News"
                  icon={<FaGoogle />}
                  as={Link}
                  href="https://news.google.com/publications/CAAqBggKMLuYFDDSzAI"
                  target="_blank"
                  variant="ghost"
                  color={textColor}
                  _hover={{ color: hoverColor }}
                  size="sm"
                />
              </HStack>
            </VStack>

            {/* Column 3: Additional Links and Footer Note */}
            <VStack spacing={3} align="start" flex={1}>
              <Text fontWeight="bold" fontSize="sm">More from Valnet</Text>
              <VStack spacing={2} align="start">
                <Link href="https://www.valnetinc.com/en/advertising" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">Advertising</Link>
                <Link href="https://www.valnetinc.com/en/careers" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">Careers</Link>
                <Link href="https://www.valnetinc.com/en/terms-of-use" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">Terms</Link>
                <Link href="https://www.valnetinc.com/en/privacy-policy" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">Privacy</Link>
                <Link href="https://www.valnetinc.com/en/editorial-integrity" color={textColor} _hover={{ color: hoverColor }} fontSize="sm">Policies</Link>
              </VStack>
              <Text fontSize="sm" textAlign="center">
                <Link href="/" color={textColor} _hover={{ color: hoverColor }}>Android Police</Link> is part of the
                <Link href="https://www.valnetinc.com/en/" color={textColor} _hover={{ color: hoverColor }} target="_blank"> Valnet Publishing Group</Link>
              </Text>
            </VStack>
          </Flex>
        </Container>
      </Box>
      <Box
        bg={copyrightBgColor}
        color={copyrightTextColor}
        pt={7}
        pb={5}
        textAlign="center"
      >
        <Text fontSize="md">
          Copyright © 2024 Android Horizon.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
