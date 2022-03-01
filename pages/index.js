import { useState, memo, useEffect } from "react";
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
  Box,
} from "@chakra-ui/react";
import Fuse from "fuse.js";

import bianance from "apis/bianance";

export default function Home({ tickerSymbols }) {
  const [search, setSearch] = useState("");
  const [filterdSymbols, setFilteredSymbols] = useState([]);
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
          You are probably looking for the <Code>/api/wojak</Code> endpoint.
        </span>
      </Alert>
      <Container maxW="container.md" pt="1em">
        <Center>
          <VStack spacing="2em">
            <Heading>Ticker Symbols</Heading>
            <Text>
              A list of availible ticker symbols from Binance API&apos;s price change
              statistics. Use them in conjunction with the <Code>symbol</Code>{" "}
              query string. Example: <Code>.../wojak?symbol=BTCUSDT</Code>.
            </Text>
            <InputGroup width="100%">
              <Input
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                htmlSize={4}
                placeholder="Search symbols..."
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
          <Tag>{symbol}</Tag>
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
