import React from 'react';
import { useForm } from 'react-hook-form';
import api from './apiAdd';
import FormModal from './formModal';
type Profile = {
	firstName: string;
	lastName: string;
	imgURL: string;
	phone: string;
};

function Modal({ ...props }) {
	const { register, handleSubmit, errors } = useForm<Profile>();
	const onSubmit = handleSubmit((data) => {
		api(data.firstName, data.lastName, data.imgURL, data.phone);
		props.setDisplayModalAdd('none');
	});
	return (
		<>
			<div
				className="fixed flex w-full h-full items-center justify-center"
				style={{ display: props.displayModalAdd }}
			>
				<div
					className="bg-gray-500  w-full h-full opacity-60"
					onClick={() => {
						props.setDisplayModalAdd('none');
					}}
				></div>
				<div className="absolute bg-white rounded-lg " style={{ width: '700px', height: '600px' }}>
					<h1 className="my-10 mx-20 text-3xl font-bold mb-6">Add client</h1>
					<form className="flex flex-col align-center" onSubmit={onSubmit}>
						<FormModal errors={errors} register={register}></FormModal>
						<div className="flex align-center justify-evenly mt-5">
							<div>
								<button
									type="submit"
									onClick={() => {}}
									className="inline-flex justify-center 
                                         items-center px-4 py-1 border border-transparent 
                                         rounded-md shadow-sm text-sm font-medium text-white bg-green-500 
                                         hover:bg-green-600 focus:outline-none h-12 w-32"
								>
									<p className="text-xl">Add</p>
								</button>
							</div>
							<div>
								<button
									type="reset"
									className="flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none h-12 w-32"
								>
									<p className="text-xl">Reset</p>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Modal;
