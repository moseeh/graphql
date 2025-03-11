export const query = `
   {
  user {
    id
    login
    attrs
    auditRatio
    transactions(
      where: {type: {_eq: "xp"}, eventId: {_eq: 75}}
      order_by: {createdAt: desc}
    ) {
      object{
        name
        attrs
        type
      }
      eventId
      path
      amount
      type
    }
    progresses(order_by: {createdAt: desc}) {
      grade
      path
    }
  }
  goItems: object(
    where: {_or: [{type: {_eq: "project"}, attrs: {_contains: {language: "Go"}}}, {type: {_eq: "piscine"}, name: {_ilike: "%Go%"}}]}
    distinct_on: [name]
  ) {
    name
    type
  }
  jsItems: object(
    where: {_or: [{type: {_eq: "project"}, attrs: {_contains: {language: "JavaScript"}}}, {type: {_eq: "piscine"}, name: {_ilike: "%JS%"}}]}
    distinct_on: [name]
  ) {
    name
    type
  }
  rustItems: object(
    where: {_or: [{type: {_eq: "project"}, attrs: {_contains: {language: "rust"}}}, {type: {_eq: "piscine"}, name: {_ilike: "%Rust%"}}]}
    distinct_on: [name]
  ) {
    name
    type
  }
}
`;


export async function fetchGraphQL(token, variables = {}) {
  try {
    const response = await fetch(
      "https://learn.zone01kisumu.ke/api/graphql-engine/v1/graphql",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("GraphQL Request Failed");
    }
    return await response.json();
  } catch (error) {
    console.error("GraphQL Error:", error);
  }
}
