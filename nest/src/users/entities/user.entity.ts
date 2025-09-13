import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    STAFF = 'STAFF',
}

@Schema({
    timestamps: true,
})
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({unique:true, required:true})
    email: string;

    @Prop({required:true})
    password: string;

    @Prop({type: String, enum: Role, default: Role.USER})
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);