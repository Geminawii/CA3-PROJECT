import { CreateBiodatumDto } from "src/citizen-registration/biodata/dto/create-biodatum.dto";

export class CreateLinkedIdentityDto {
    readonly NIN: number;
    readonly BVN: number;
    readonly MobileNumbers: number;
    readonly bioData: CreateBiodatumDto; 
  BioData: any;
}
