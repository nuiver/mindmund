import db from '../models/_index'
import { AreaInstance } from '../models/area'

export function create(area: AreaInstance): Promise<any> {
  return db.Area.create({ areaName: area.areaName })
       }

export function findAll(): Promise<any> {
  return db.Area.findAll()
}
