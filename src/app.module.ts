import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizenRegistrationModule } from './citizen-registration/citizen-registration.module';
import { LinkedIdentityModule } from './linked-identity/linked-identity.module';

@Module({
  imports: [CitizenRegistrationModule, TypeOrmModule.forRoot(),LinkedIdentityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
