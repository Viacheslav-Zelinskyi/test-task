import { GraphQLClient, gql } from 'graphql-request';
export default function apiEdit(id: any, firstName: string, lastName: string, phone: string, imgURL: string) {
	const endpoint = 'https://test-task.expane.pro/api/graphql';
	const graphQLClient = new GraphQLClient(endpoint, {});
	const mutation = gql`
		mutation UpdateClient($id: ID!, $firstName: String!, $lastName: String!, $phone: String, $avatarUrl: String) {
			updateClient(id: $id, firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl) {
				id
				firstName
				lastName
				phone
				avatarUrl
			}
		}
	`;
	const variables = {
		id: id,
		firstName: firstName,
		lastName: lastName,
		phone: phone,
		avatarUrl: imgURL,
	};
	console.log(variables);
	graphQLClient.request(mutation, variables);
}
