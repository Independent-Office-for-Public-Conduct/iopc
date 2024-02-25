import { Badge } from "react-bootstrap";
import { Rating } from "../../types/Rating";

export function RatingBadge({ rating }: { rating: Rating }) {
	switch (rating) {
		case Rating["Urgent improvement is required"]:
			return <Badge>{Object.values(Rating)[0]}</Badge>;
		case Rating["Major improvement is necessary"]:
			return <Badge>{Object.values(Rating)[1]}</Badge>;
		case Rating["Some improvement is necessary"]:
			return <Badge>{Object.values(Rating)[2]}</Badge>;
		case Rating["Generally satisfactory"]:
			return <Badge>{Object.values(Rating)[3]}</Badge>;
		case Rating["Standards are good"]:
			return <Badge>{Object.values(Rating)[4]}</Badge>;
		case Rating["Standards are very good"]:
			return <Badge>{Object.values(Rating)[5]}</Badge>;
		default:
			break;
	}
}
