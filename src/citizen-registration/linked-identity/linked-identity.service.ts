import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Biodatum } from '../biodata/entities/biodatum.entity';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Injectable()
export class LinkedIdentityService {
  LinkedIdentityRepository: any;
  userRepository: any;
  BioDataRepository: any;
  linkedIdentityRepository: any;
   async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
    const newLinkedIdentity =
    this.LinkedIdentityRepository.create(createLinkedIdentityDto);

    if(createLinkedIdentityDto.BioData){
      const newBiodata = this.BioDataRepository.create(createLinkedIdentityDto.BioData)
      const biodata: Biodatum= await this.BioDataRepository.save(newBiodata);
newLinkedIdentity.biodata = biodata;
    }
    return this.LinkedIdentityRepository.save(newLinkedIdentity)
  }



  findAll() {
    return `This action returns all linkedIdentity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} linkedIdentity`;
  }

  update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return `This action updates a #${id} linkedIdentity`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkedIdentity`;
  }
}
