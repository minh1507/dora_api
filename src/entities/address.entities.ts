import {
    Table,
    Model,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
    HasOne
  } from "sequelize-typescript";
  import { Optional } from "sequelize";
import { User } from "./user.entities.ts";
  
  interface AddressAttributes {
    id: number;
    name: string;
    status: number;
    createDate: Date;
    createBy: number;
    updateDate: Date;
    updateBy: number;
  }
  interface AddressCreationAttributes extends Optional<AddressAttributes, "id"> {}
  type UserType = typeof User

  @Table({
    timestamps: false,
    tableName: "dm_addresses",
  })
  export class Address extends Model<AddressAttributes, AddressCreationAttributes> {
    @HasOne(() => User, "addressId")
    user!: UserType;

    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    name!: string;
  
    @Column({
      type: DataType.BOOLEAN,
      allowNull: false,
    })
    status!: number 
  
    @Column({
      type: DataType.DATE,
      defaultValue: DataType.NOW,
      allowNull: true,
    })
    createDate!: Date 
  
    @Column({
      type: DataType.DATE,
      defaultValue: DataType.NOW,
      allowNull: true,
    })
    updateDate!: Date 
  
    @Column({
      type: DataType.INTEGER,
      allowNull: true,
    })
    createBy!: number; 
  
    @Column({
      type: DataType.INTEGER,
      allowNull: true,
    })
    updateBy!: number; 
  }
  