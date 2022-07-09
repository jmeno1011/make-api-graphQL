import { ApolloServer, gql } from "apollo-server";

// SDL : Schema Definition Language
// 유저에게 뭔가 보내주려면 타입을 설정해줘야한다.
const typeDefs = gql`
  type Query {
    text: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
