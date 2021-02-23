import React, { useState } from 'react';
import './App.css';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { request, gql } from "graphql-request";
import { useForm } from 'react-hook-form';
import Modal from './modal/modalAdd'
import ModalEdit from './modal/modalEdit'
import Client from './client/client'

function App() {
  const [displayModalAdd, setDisplayModalAdd] = useState('none'); 
  const [displayModalEdit, setDisplayModalEdit] = useState('none');
  return (
  <>
  <Modal displayModalAdd={displayModalAdd} setDisplayModalAdd={setDisplayModalAdd}></Modal>
  <ModalEdit displayModalEdit={displayModalEdit} setDisplayModalEdit={setDisplayModalEdit}></ModalEdit>
  <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto ">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Id
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="sm:ml-3">
                  <button type="button" onClick={()=>{setDisplayModalAdd('flex')}} className="inline-flex items-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none">
                    
                    <p className="text-2xl">+</p> &nbsp; Add
                  </button>
                </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <Client displayModalEdit={displayModalEdit} setDisplayModalEdit={setDisplayModalEdit} id={1} firstName={'Jane'} lastName={'Cooper'} phone={'+380987067050'} imgURL={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"}></Client>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;
