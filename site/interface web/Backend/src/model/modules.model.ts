import {Column, Model, Table,DataType} from "sequelize-typescript";

@Table
class Module extends Model {
    @Column(DataType.TEXT)
    get name(): string {
        return 'My name is ' + this.getDataValue('name')
    }
    set name(value: string) {
        this.setDataValue('name', value)
    }
}

export default Module