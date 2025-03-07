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
      eventId
      path
      amount
      type
    }
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
