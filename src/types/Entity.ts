import { Encounter } from "./Encounter";
import { AdditionalInformation } from "./AdditionalInformation";

export type Entity = {
	Id: string;
	Name: string;
	CompanyNumber?: string;
	CollarNumber?: string;
	Encounters?: Encounter[];
	AdditionalInformation?: AdditionalInformation[];
};
