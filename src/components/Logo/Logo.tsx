import "./Logo.scss";

export function Logo() {
	return (
		<div className="logo d-flex align-items-center">
			<span className="display-5">IOPC</span>
			<span className="vertical-bar w-100 ms-2 ps-2">
				<span>Independent</span>
				<span>Office for</span>
				<span>Public Conduct</span>
			</span>
		</div>
	);
}
