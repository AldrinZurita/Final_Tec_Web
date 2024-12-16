import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller'; // Importa el AppController
import { AppService } from './app.service'; // Importa el AppService

import { UsuarioModule } from './modules/usuario/usuario.module';
import { PermisoModule } from './modules/permiso/permiso.module';
import { EventoModule } from './modules/evento/evento.module';
import { PresidenteOtbModule } from './modules/presidente_otb/presidente_otb.module';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { EventoPermisoModule } from './modules/evento-permiso/evento-permiso.module';
import { ReservaModule } from './modules/reserva/reserva.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: ['query', 'error'],
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }),
      inject: [ConfigService],
    }),

    // Módulos existentes
    UsuarioModule,
    PermisoModule,
    EventoModule,
    PresidenteOtbModule,
    EmpresaModule,
    EventoPermisoModule,
    ReservaModule,
  ],
  controllers: [AppController], // Registra AppController
  providers: [AppService], // Registra AppService
})
export class AppModule {}