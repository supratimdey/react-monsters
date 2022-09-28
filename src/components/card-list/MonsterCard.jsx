import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Component } from "react";

function MonsterCard({ monster }) {
  const { name, email, id } = monster;
  return (
    <div key={id}>
      <Stack
        w="180px"
        p={2}
        boxShadow="md"
        borderRadius="xl"
        _hover={{
          bg: "",
          position: "relative",
          top: "-10px",
          transition: "top ease 0.5s",
        }}
      >
        <img
          alt="img"
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <VStack align="flex-start">
          <Heading fontSize="lg">{name}</Heading>
          <Text fontSize="12px">{email}</Text>
        </VStack>
      </Stack>
    </div>
  );
}

export default MonsterCard;

// class MonsterCard extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;

//     return (
//       <div key={id}>
//         <Stack
//           w="180px"
//           p={2}
//           boxShadow="md"
//           borderRadius="xl"
//           _hover={{
//             bg: "",
//             position: "relative",
//             top: "-10px",
//             transition: "top ease 0.5s",
//           }}
//         >
//           <img
//             alt="img"
//             src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           />
//           <VStack align="flex-start">
//             <Heading fontSize="lg">{name}</Heading>
//             <Text fontSize="12px">{email}</Text>
//           </VStack>
//         </Stack>
//       </div>
//     );
//   }
// }

// export default MonsterCard;
