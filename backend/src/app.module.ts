import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { PermisoModule } from './modules/permiso/permiso.module'; // Módulo de permiso
import { EventoModule } from './modules/evento/evento.module'; // Módulo de evento
import { PresidenteOtbModule } from './modules/presidente_otb/presidente_otb.module'; // Módulo de presidente_otb
import { EmpresaModule } from './modules/empresa/empresa.module';
import { EventoPermisoModule } from './modules/evento-permiso/evento-permiso.module';
import { ReservaModule } from './modules/reserva/reserva.module';
import { EspacioPublicoModule } from './modules/espacio-publico/espacio-publico.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USER || 'appuser',
      password: process.env.DATABASE_PASSWORD || 'app_password',
      database: process.env.DATABASE_NAME || 'proyecto_sisinfo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.TYPEORM_SYNC === 'true', // Por defecto, false
      logging: process.env.DATABASE_LOGGING === 'true' ? ['query', 'error'] : false,
      extra: {
        ssl: {
          rejectUnauthorized: false, // Necesario si no usas un certificado firmado.
        },
    }}),
    UsuarioModule,
    PermisoModule,
    EventoModule,
    PresidenteOtbModule,
    EmpresaModule,
    EventoPermisoModule,
    ReservaModule,
    EspacioPublicoModule
  ],
})
export class AppModule {}
