import db from '../models/_index'
import { AreaInstance } from '../models/area'

export function create(todo: AreaInstance): Promise<any> {
  return db.Area.create({ areaName: todo.areaName })
       }


export function findAll(): Promise<any> {
  return db.Area.findAll({ include: [{ model: db.Area, as: 'area' }] })
}
