import { Container, Navbar } from "react-bootstrap";
import { Logo } from "@Components/Logo/Logo";

export function Landing() {
	return (
		<Container>
			<Navbar className="pb-4">
				<Container>
					<Navbar.Brand href="#home">
						<Logo />
					</Navbar.Brand>
					{/* <Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav> */}
				</Container>
			</Navbar>
			<main>
				<section className="pb-4">
					<h1>An open source accountabiltiy database</h1>
					{/* 					
					<p>These are the following ratings</p>
					<Row>
						<Col>
							<RatingBadge rating={Rating["Urgent improvement is required"]} />
						</Col>
						<Col>
							<RatingBadge rating={Rating["Major improvement is necessary"]} />
						</Col>
						<Col>
							<RatingBadge rating={Rating["Some improvement is necessary"]} />
						</Col>
						<Col>
							<RatingBadge rating={Rating["Generally satisfactory"]} />
						</Col>
						<Col>
							<RatingBadge rating={Rating["Standards are good"]} />
						</Col>
						<Col>
							<RatingBadge rating={Rating["Standards are very good"]} />
						</Col>
					</Row>
					<br />
					<h2>What the rating covers</h2>
					<p>
						Ratings are a snapshot of the standards whilst an entity is
						operating in the public domain at the time of inspection.
					</p>
					<p>This includes:</p>
					<ul>
						<li></li>
					</ul> */}
				</section>
				{/* <h2 className="pb-3">Latest</h2> */}
				{/* <Entities /> */}
			</main>
		</Container>
	);
}
