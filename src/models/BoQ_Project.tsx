import { DisciplineType_MassTypeMaterialBinding_Dictionary } from './materialSetting/DisciplineType_MassTypeMaterialBinding_Dictionary';

export interface BoQ_Project {
  id: number,
  name: string,
  disciplineType_MassTypeMaterialBinding_Dictionary: DisciplineType_MassTypeMaterialBinding_Dictionary
}
