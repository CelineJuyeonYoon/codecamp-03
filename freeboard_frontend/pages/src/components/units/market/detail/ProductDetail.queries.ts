import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      pickedCount
      seller {
        name
      }
      tags
      images
      useditemAddress {
        lat
        lng
        address
        addressDetail
      }
    }
  }
`;
