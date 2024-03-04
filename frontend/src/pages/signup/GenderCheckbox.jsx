import React from "react";

function GenderCheckbox({ onCheckChange, selectedCheck }) {
	return (
		<div className='flex mt-4'>
			<div className='form-control'>
				<label
					className={`label gap-2 cursor-pointer ${
						selectedCheck === "male" ? "selected" : ""
					}`}
				>
					<span className='label-text text-white'>Male</span>
					<input
						type='checkbox'
						name='gender'
						className='checkbox   border-slate-700'
						checked={selectedCheck === "male"}
						onChange={() => onCheckChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label
					className={`label gap-2 cursor-pointer ${
						selectedCheck === "female" ? "selected" : ""
					}`}
				>
					<span className='label-text text-white'>Female</span>
					<input
						type='checkbox'
						name='gender'
						className='checkbox border-slate-700'
						checked={selectedCheck === "female"}
						onChange={() => onCheckChange("female")}
					/>
				</label>
			</div>
		</div>
	);
}

export default GenderCheckbox;
