import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './modal/modalAdd';
import Client from './client/client';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';
const queryClient = new QueryClient();
function App() {
	const [displayModalAdd, setDisplayModalAdd] = useState('none');
	useEffect(() => {
		listClients();
		listClients().catch((error) => console.error(error));
	}, []);

	return (
		<>
			<Modal displayModalAdd={displayModalAdd} setDisplayModalAdd={setDisplayModalAdd}></Modal>
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-auto ">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xl font-medium text-gray-900 uppercase tracking-wider"
										>
											Id
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xl font-medium text-gray-900 uppercase tracking-wider"
										>
											Name
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xl font-medium text-gray-900 uppercase tracking-wider"
										>
											Phone
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
										>
											<span className="sm:ml-3"></span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									<QueryClientProvider client={queryClient}>
										<Clients />
									</QueryClientProvider>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div style={{ position: 'fixed', right: '5%', bottom: '10%' }}>
				<button
					type="button"
					onClick={() => {
						setDisplayModalAdd('flex');
					}}
					style={{ boxShadow: '0 5 10px rgba(0,0,0,0.5)' }}
					className="flex flex-col items-center justify-center border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none h-20 w-20"
				>
					<p className="text-4xl">+</p>
				</button>
			</div>
		</>
	);
}

function Clients() {
	const { data, status } = useQuery('clients', listClients);
	if (status === 'success') {
		let clients = data.getClients.map(function (
			val = { id: Number, firstName: String, lastName: String, phone: String, avatarUrl: String },
			index: number
		) {
			return (
				<Client
					key={index}
					id={val.id}
					firstName={val.firstName}
					lastName={val.lastName}
					imgURL={val.avatarUrl}
					phone={val.phone}
					className={'h-12 w-12 rounded-full'}
				></Client>
			);
		});
		return clients;
	}
	if (status === 'loading') return <div className="text-center">Load...</div>;
	if (status === 'error') return <div>Error...</div>;
}

const listClients = async () => {
	const endpoint = 'https://test-task.expane.pro/api/graphql';
	const graphQLClient = new GraphQLClient(endpoint, {});
	const query = gql`
		{
			getClients {
				id
				firstName
				lastName
				phone
				avatarUrl
			}
		}
	`;
	const dataLocal = await graphQLClient.request(query);
	return dataLocal;
};

export default App;
