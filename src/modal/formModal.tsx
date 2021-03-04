export default function formModal({ ...props }) {
	return (
		<>
			<div className="flex align-center justify-evenly">
				<div>
					<p>First Name</p>
					<input
						type="text"
						name="firstName"
						defaultValue={props.firstName}
						ref={props.register({ required: true })}
						className="border-2 outline-none rounded-lg  my-5 h-14 w-64 pl-4 text-lg mb-1"
						placeholder="First Name"
					/>
					{props.errors.firstName && <div className="text-sm text-red-600 mb-2 text-center">Enter Name</div>}
				</div>
				<div>
					<p>Last Name</p>
					<input
						type="text"
						name="lastName"
						defaultValue={props.lastName}
						ref={props.register({ required: true })}
						className="border-2 outline-none rounded-lg  my-5 h-14 w-64 pl-4 text-lg mb-1"
						placeholder="Last Name"
					/>
					{props.errors.lastName && (
						<div className="text-sm text-red-600 mb-2 text-center">Enter Surname</div>
					)}
				</div>
			</div>
			<div className="flex justify-center">
				<div>
					<p className="mt-2">Image URL</p>
					<input
						type="text"
						name="imgURL"
						defaultValue={props.imgURL}
						ref={props.register({ required: true })}
						className="border-2 outline-none rounded-lg  my-5 h-14 pl-4 text-lg"
						placeholder="Image URL"
						style={{ width: '575px' }}
					></input>
					{props.errors.imgURL && (
						<div className="text-sm text-red-600 -mb-3 text-center">Enter Image URL</div>
					)}
				</div>
			</div>
			<div className="flex justify-center">
				<div>
					<p>Phone</p>
					<input
						type="text"
						name="phone"
						defaultValue={props.phone}
						ref={props.register({ required: true })}
						className="border-2 outline-none rounded-lg  my-5 h-14 pl-4 text-lg"
						placeholder="Phone"
						style={{ width: '575px' }}
					></input>
					{props.errors.phone && (
						<div className="text-sm text-red-600 -mb-1 -mt-2 text-center">Enter Phone number</div>
					)}
				</div>
			</div>
		</>
	);
}
