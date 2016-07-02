import gql from 'apollo-client/gql';

class postQuery {
  constructor(variables) {
    const query = {
      query: gql`
        query getPost($id: ID!) {
          post(id: $id) {
            id
            title,
            body,
            url,
            comments {
            id,
            body,
            created_at,
              user {
                id,
                name,
              }
            }
            user {
              id,
              name,
              email
            }
          }
        }
      `,
      variables: variables,
      forceFetch: false,
      returnPartialData: false,
    };
    return query;
  }
}

export default postQuery;
