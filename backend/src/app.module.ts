import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',// dirección del servidor de base de datos
      port: 3306,// puerto
      username: 'root',// usuario de MySQL
      password: '1234',// contraseña de MySQL
      database: 'proyecto_sisinfo',// nombre de tu base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,// sincroniza automáticamente la base de datos en desarrollo
      logging: ['query', 'error'],
    }),
  ],
})
export class AppModule {}
