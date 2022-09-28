import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/CardList";
import {
  IconButton,
  Input,
  useColorMode,
  VStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const [searchText, setSearchText] = useState("");

  const [users, setUsers] = useState([]);

  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearchText(event.target.value.toLocaleLowerCase());
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchText);
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) => setMonsters(users));

    setUsers(monsters);
  }, []);

  return (
    <div className="App">
      <h1>user list</h1>
      <Flex>
        <Spacer />
        <IconButton
          mr={16}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Flex>

      <Input
        size="lg"
        width="auto"
        variant="flushed"
        className="search-box"
        type="search"
        placeholder="search user"
        onChange={onSearchChange}
      />

      <CardList monsters={filteredMonsters} />
      {/* {filteredMonsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
