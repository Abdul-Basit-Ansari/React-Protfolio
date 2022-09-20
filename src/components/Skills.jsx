import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Skillitem from './Skillitem'





export default () => {
	const [skill, setskill] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:7000/skills')
			.then((response) => {
				setskill(response.data.data);
				console.log("use effect", response.data.data);
			});
	}, []);
	const myskills = () => {
		return (


			<section className="text-gray-600 body-font ">
				<div className="container px-5 pb-24 mx-auto text-center ">
					<div className="flex flex-col text-center w-52 mb-20 ">
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base "></p>
					</div>
					<div className="lg:w-2/3 w-full mx-auto overflow-auto ">
						<h1 className="sm:text-4xl text-3xl font-medium title-font mb-10 border-teal-600 py-5 border-b-2 text-teal-600 ">Skills</h1>
						<table className="table-auto w-full text-left whitespace-no-wrap ">
							<thead>
								<tr className="text-left ">
									<th className="w-2/6 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl ">Skills</th>
									<th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 ">Level</th>
								</tr>
							</thead>
							<tbody>


								{skill.map((sk, index) => {
									console.log("map skill", sk);
									return (

										<Skillitem title={sk.name} range={sk.range}/>

									)

								})}
								

							</tbody>
						</table>
					</div>

				</div>
			</section>	
				)}
	// console.log( "Projobj",project);
	return (



		myskills()

	)


}














