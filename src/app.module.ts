import { join } from 'path'; // Paquete de node
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
    imports: [

        ConfigModule.forRoot(),

        ServeStaticModule.forRoot({
            rootPath: join(__dirname,'..','public'),
        }),

        MongooseModule.forRoot(process.env.MONGODB),

        PokemonModule,

        CommonModule,

        SeedModule,
    ],
})
export class AppModule {
    constructor(){
        console.log(process.env)
    }
}
