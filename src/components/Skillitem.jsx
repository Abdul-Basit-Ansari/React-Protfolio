import React, { useState } from 'react'


const Skillitem = ({title , range}) => {


	return (
		<>

			<tr className="text-left ">
				<td className="w-2/6 px-4 py-3 ">{title}</td>
				<td className="px-4 py-3 ">
					<div className="w-full bg-gray-200 rounded-full ">
						<div className={`bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full mywidth${range}`}>{range}%</div>
					</div>
				</td>

			</tr>



		</>
	)
}

export default Skillitem
