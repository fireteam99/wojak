import { useState, memo } from "react";
import {
  Code,
  Container,
  VStack,
  HStack,
  Alert,
  AlertIcon,
  Tag,
  Heading,
  Text,
  Center,
  SimpleGrid,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Kbd,
  Link,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import Fuse from "fuse.js";
import errorWojak from '../public/wojaks/error/error-default.png';

import bianance from "apis/bianance";

export default function Home({ tickerSymbols }) {
  const [search, setSearch] = useState("");
  const [filterdSymbols, setFilteredSymbols] = useState([]);

  if (!tickerSymbols) {
    console.error(
      `There was an error with the Binance API. Please check: ${bianance.defaults.baseURL}`
    );
    return (
      <Center mt="10em">
        <VStack>
          <Heading>Uh oh, there was an issue with the Binance API</Heading>
          <Text>
            Please check{" "}
            <Link color="teal" href={bianance.defaults.baseURL} isExternal>
              {bianance.defaults.baseURL}
            </Link>
          </Text>
          <Spacer />
          <Image width={200} height={200} src={errorWojak} alt="Errored out Wojak" />
        </VStack>
      </Center>
    );
  }

  const fuse = new Fuse(tickerSymbols);

  const handleSearch = () => {
    const results = fuse.search(search);
    setFilteredSymbols(results.map((x) => x.item));
  };

  return (
    <VStack>
      <Alert status="info">
        <AlertIcon />
        <span>
          You might be looking for the <Code>/api/wojak</Code> endpoint.
        </span>
      </Alert>
      <Container maxW="container.md" pt="1em">
        <Center>
          <VStack spacing="2em">
            <Heading>Ticker Symbols</Heading>
            <Text>
              A list of available ticker symbols from Binance API&apos;s price
              change statistics. Use them in conjunction with the{" "}
              <Code>symbol</Code> query string. Example:{" "}
              <Code>.../api/wojak?symbol=BTCUSDT</Code>.
            </Text>
            <InputGroup width="100%">
              <Input
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search symbols... ex: BTC"
              />
              <InputRightElement width="4.5rem">
                <Button size="md" onClick={() => handleSearch(search)}>
                  Search
                </Button>
              </InputRightElement>
            </InputGroup>

            {tickerSymbols == null ? (
              <Alert status="error">
                <AlertIcon />
                There was an error fetching the ticker symbols.
              </Alert>
            ) : filterdSymbols.length == 0 ? (
              <VStack>
                <HStack>
                  <Text>Press</Text>
                  <Kbd>Enter</Kbd> <Text>to search.</Text>
                </HStack>
                <Heading as="h3" size="lg" color="gray.500">
                  No results...
                </Heading>
              </VStack>
            ) : (
              <SymbolGrid symbols={filterdSymbols} />
            )}
          </VStack>
        </Center>
      </Container>
    </VStack>
  );
}

const SymbolGrid = memo(function SymbolGrid({ symbols }) {
  return (
    <SimpleGrid width="100%" minChildWidth="7em" spacing="1em">
      {symbols.map((symbol) => (
        <Center key={symbol}>
          <Tag
            _hover={{
              bg: "blue.800",
              color: "gray.100",
              transform: "scale(1.2)",
              transition: ".15s ease-in-out",
            }}
          >
            <Link as={NextLink} href={`/api/wojak?symbol=${symbol}`} passHref>
              <a target="_blank" rel="noopener noreferrer">
                {symbol}
              </a>
            </Link>
          </Tag>
        </Center>
      ))}
    </SimpleGrid>
  );
});

export async function getServerSideProps(context) {
  let tickerSymbols = null;
  try {
    const { data = [] } = await bianance.get("/v3/ticker/24hr");
    tickerSymbols = data.map((d) => d?.symbol).filter((symbol) => !!symbol);
  } catch (err) {
    console.error("Error fetching ticker data on home page.");
    console.error(err);
  } finally {
    return {
      props: { tickerSymbols },
    };
  }
}
