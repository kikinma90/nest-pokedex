import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//Las entidades hacen una referencia a como queremos grabar en la base de datos. En mongodb se llama coleccion.

@Schema()
export class Pokemon extends Document{

    //id // Mongo ya te lo proporciona
    // Utilizamos decoradores para indicar que estas propiedades son unicas y tienen indice para poder realizar busquedas en la db de mongo
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

}

// Exportamos el esquema para poder utilizarlo en otros archivos
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
