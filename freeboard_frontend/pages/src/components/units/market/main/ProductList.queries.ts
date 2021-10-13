import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      remarks
      contents
      price
      tags
      seller {
        name
        picture
      }
      pickedCount
    }
  }
`;
