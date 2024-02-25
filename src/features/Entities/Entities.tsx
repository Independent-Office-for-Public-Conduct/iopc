// import { Button } from "react-bootstrap";
// import dataJson from "../../data/data.json";
// import { Entity } from "../../types/Entity";
// import { Encounter } from "../../types/Encounter";
// import { LinkContainer } from "react-router-bootstrap";

// export function Entities() {
// 	const data = (dataJson as Entity[]).slice(0, 10);

// 	return data.map((entity) => {
// 		const latestEncounter = entity.Encounters?.sort(
// 			(a: Encounter, b: Encounter) => {
// 				return new Date(a.Date).getTime() - new Date(b.Date).getTime();
// 			},
// 		)[0];

// 		return (
// 			<div className="pb-4">
// 				<h4>{entity.Name}</h4>
// 				{/* <h5>{latestEncounter.Date}</h5> */}
// 				{/* <Badge className="mb-2">{Rating[latestEncounter?.Rating]}</Badge> */}
// 				{/* <p dangerouslySetInnerHTML={{ __html: latestEncounter?.Description }} /> */}
// 				<LinkContainer to={`/encounter/${latestEncounter?.Id}`}>
// 					<Button>Read more</Button>
// 				</LinkContainer>
// 			</div>
// 		);
// 	});
// }
