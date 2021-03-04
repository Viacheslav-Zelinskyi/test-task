import { GraphQLClient, gql } from 'graphql-request';

function api(firstName: String, lastName: String, phone: String, imgURL: String) {
	const endpoint = 'https://test-task.expane.pro/api/graphql';
	const graphQLClient = new GraphQLClient(endpoint, {});
	const mutation = gql`
		mutation AddClient($firstName: String!, $lastName: String!, $phone: String, $avatarUrl: String) {
			addClient(firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl) {
				firstName
				lastName
				phone
				avatarUrl
			}
		}
	`;
	const variables = {
		firstName: firstName,
		lastName: lastName,
		phone: phone,
		avatarUrl: imgURL,
	};
	console.log(variables);
	graphQLClient.request(mutation, variables);
}
export default api;
