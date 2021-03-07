import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {TypeOrmModule} from "@nestjs/typeorm"
import {Biodatum} from "src/citizen-registration/BioData/entities/biodatum.entity";




@Entity()
export class LinkedIdentity {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    NIN: number;

    @Column()
     BVN: number;

     @Column()
      MobileNumbers: number;

      @JoinColumn()
      @OneToOne(type => Biodatum, Biodatum=> Biodatum.linkedidentity, {cascade:true}) user: Biodatum;






}



