import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsuarioModule } from './modules/usuario/usuario.module';
import { PermisoModule } from './modules/permiso/permiso.module';
import { EventoModule } from './modules/evento/evento.module';
import { PresidenteOtbModule } from './modules/presidente_otb/presidente_otb.module';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { EventoPermisoModule } from './modules/evento-permiso/evento-permiso.module';
import { ReservaModule } from './modules/reserva/reserva.module';

@Module({
  imports: [
    // Importa ConfigModule para usar variables de entorno
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables estén disponibles en toda la aplicación
      envFilePath: '.env', // Archivo donde están las variables de entorno
    }),

    // Configuración dinámica de TypeORM usando ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', // Cambiado de 'mysql' a 'postgres'
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Cambia a false en producción para mayor seguridad
        logging: ['query', 'error'], // Activa el log de consultas y errores
        ssl: true, // Requerido por Render para conexiones seguras con PostgreSQL
        extra: {
          ssl: {
            rejectUnauthorized: false, // Necesario si usas certificados autogenerados
          },
        },
      }),
      inject: [ConfigService],
    }),

    // Importa tus módulos existentes
    UsuarioModule,
    PermisoModule,
    EventoModule,
    PresidenteOtbModule,
    EmpresaModule,
    EventoPermisoModule,
    ReservaModule,
  ],
})
export class AppModule {}