import React from 'react';
import { useForm } from 'react-hook-form';
import api from './apiEdit';
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
		api(props.id, data.firstName, data.lastName, data.phone, data.imgURL);
		props.setDisplayModalEdit('none');
		window.location.reload();
	});

	return (
		<>
			<div
				className="fixed top-0 left-0 flex w-full h-full items-center justify-center"
				style={{ display: props.displayModalEdit }}
			>
				<div
					className="bg-gray-500  w-full h-full opacity-60"
					onClick={() => {
						props.setDisplayModalEdit('none');
					}}
				></div>
				<div className="absolute bg-white rounded-lg " style={{ width: '700px', height: '600px' }}>
					<h1 className="my-10 mx-20 text-3xl font-bold mb-6">Edit client</h1>
					<form className="flex flex-col align-center" onSubmit={onSubmit}>
						<FormModal
							firstName={props.firstName}
							register={register}
							errors={errors}
							lastName={props.lastName}
							imgURL={props.imgURL}
							phone={props.phone}
						></FormModal>
						<div className="flex align-center justify-evenly mt-5">
							<div>
								<button
									type="submit"
									onClick={() => {}}
									className="flex flex-col justify-center 
                                         align-center px-4 py-1 border border-transparent 
                                         rounded-md shadow-sm text-sm font-medium text-white bg-green-500 
                                         hover:bg-green-600 focus:outline-none h-14 w-42"
								>
									<p className="text-base">Close and Save</p>
								</button>
							</div>
							<div>
								<button
									type="reset"
									onClick={() => {
										props.setDisplayModalEdit('none');
									}}
									className="flex flex-col
                                         align-center justify-center px-4 py-1 border border-transparent 
                                         rounded-md shadow-sm text-sm font-medium text-white bg-red-500 
                                         hover:bg-red-600 focus:outline-none h-14 w-42"
								>
									<p className="text-base">Close without saving</p>
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
