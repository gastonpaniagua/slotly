import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthController } from './health/health.controller.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { ProfesionalesModule } from './profesionales/profesionales.module.js';
import { ServiciosModule } from './servicios/servicios.module.js';
import { DisponibilidadModule } from './disponibilidad/disponibilidad.module.js';
import { TurnosModule } from './turnos/turnos.module.js';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, AuthModule, UsuariosModule, ProfesionalesModule, ServiciosModule, DisponibilidadModule, TurnosModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
