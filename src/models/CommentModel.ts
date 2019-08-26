import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface'
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface CommentAttributes {
    id?: number;
    comment?: string;
    post?: number;
    user?: number;
    createdAt: string;
    updatedAt: string;
}

export interface CommentInstance extends BaseModelInterface, Sequelize.Model<CommentInstance, CommentAttributes>{}

export interface CommentModel extends BaseModelInterface, Sequelize.Model<CommentInstance, CommentAttributes>{}

export default (sequelize: Sequelize.Sequelize, Datatypes: Sequelize.DataTypes): CommentModel =>{

    const Comment: CommentModel = sequelize.define('Comment', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        comment: {
            type: Datatypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'comments'
    });

    Comment.associate = (models: ModelsInterface) : void => {
        Comment.belongsTo(models.Post, {
            foreignKey:{
                allowNull: false,
                field: 'post',
                name: 'post'
            }
        })
    }

    return Comment
}