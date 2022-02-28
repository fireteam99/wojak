import { useState, memo, useEffect } from "react";
import {
  Code,
  Container,
  VStack,
  Alert,
  AlertIcon,
  Tag,
  Heading,
  Text,
  Center,
  SimpleGrid,
  Box,
  Input,
} from "@chakra-ui/react";
import Fuse from "fuse.js";

import bianance from "apis/bianance";

export default function Home({ tickerSymbols }) {
  const [search, setSearch] = useState("");
  const [filterdSymbols, setFilteredSymbols] = useState(tickerSymbols);
  const fuse = new Fuse(tickerSymbols);

  useEffect(() => {
    const results = fuse.search(search);
    setFilteredSymbols(results.map((x) => x.item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const SymbolGrid = memo(
    function SymbolGrid({ symbols }) {
      return (
        <SimpleGrid width="100%" minChildWidth="7em" spacing="1em">
          {symbols.map((symbol) => (
            <Center key={symbol}>
              <Tag>{symbol}</Tag>
            </Center>
          ))}
        </SimpleGrid>
      );
    },
    [filterdSymbols]
  );

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
              A list of availible ticker symbols from Binance API's price change
              statistics. Use them in conjunction with the <Code>symbol</Code>{" "}
              query string. Example: <Code>.../wojak?symbol=BTCUSDT</Code>
            </Text>
            <Input
              onKeyPress={(e) => e.key === "Enter" && setSearch(e.target.value)}
              htmlSize={4}
              width="100%"
              placeholder="Filter symbols..."
            />
            {tickerSymbols == null ? (
              <Alert status="error">
                <AlertIcon />
                There was an error fetching the ticker symbols.
              </Alert>
            ) : filterdSymbols.length == 0 ? (
              <Center>No results...</Center>
            ) : (
              <SymbolGrid symbols={filterdSymbols} />
            )}
          </VStack>
        </Center>
      </Container>
    </VStack>
  );
}

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
