import { AdditionalInformation } from "./AdditionalInformation";
import { Entity } from "./Entity";
import { Rating } from "./Rating";

export type Encounter = {
	Id: string;
	Date: string;
	Description: TrustedHTML;
	Rating: Rating;
	AdditionalInformation: AdditionalInformation[];
	RelatedEntities: Entity[];
};
