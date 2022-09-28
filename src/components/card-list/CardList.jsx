import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import MonsterCard from "./MonsterCard";

function CardList({ monsters }) {
  return (
    <div>
      <Container maxWidth={"container.xl"}>
        <Grid gap={4} gridTemplateColumns="repeat(auto-fit,minmax(180px,1fr))">
          {monsters.map((monster) => {
            return <MonsterCard monster={monster} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default CardList;

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     console.log(monsters);

//     return (
//       <div>
//         <Container maxWidth={"container.xl"}>
//           <Grid
//             gap={4}
//             gridTemplateColumns="repeat(auto-fit,minmax(180px,1fr))"
//           >
//             {monsters.map((monster) => {
//               return <MonsterCard monster={monster} />;
//             })}
//           </Grid>
//         </Container>
//       </div>
//     );
//   }
// }

//export default CardList;
