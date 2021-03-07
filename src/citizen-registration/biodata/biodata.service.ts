import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
import { Biodatum } from './entities/biodatum.entity';


@Injectable()
export class BiodataService {
  constructor(
    @InjectRepository(Biodatum)
    private BioDataRepository: Repository<Biodatum>
  ) { }

  async create(createBiodatumDto: CreateBiodatumDto) {
    const newBioData: Biodatum = this.BioDataRepository.create(createBiodatumDto)
    return this.BioDataRepository.save(newBioData);
    //return 'This action adds a new biodatum';


  }

  async findAll() {
    //return `This action returns all biodata`;
    return await this.BioDataRepository.find();

  }

  async findOne(id: number) {
    //return `This action returns a #${id} biodatum`;
    return await this.BioDataRepository.findOne(id);


  }

  async update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
    //return `This action updates a #${id} biodatum`;
    return await this.BioDataRepository.update(id, updateBiodatumDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} biodatum`;
    return await this.BioDataRepository.delete(id);

  }
}





