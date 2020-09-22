import { DisciplineType_MassTypeMaterialBinding_Dictionary } from './materialSetting/DisciplineType_MassTypeMaterialBinding_Dictionary';

export class BoQ_Project {

  id?: number;
  name?: string;

  private _disciplineType_MassTypeMaterialBinding_Dictionary?: DisciplineType_MassTypeMaterialBinding_Dictionary;
  get disciplineType_MassTypeMaterialBinding_Dictionary(): DisciplineType_MassTypeMaterialBinding_Dictionary{
    if (this._disciplineType_MassTypeMaterialBinding_Dictionary == null){
      this._disciplineType_MassTypeMaterialBinding_Dictionary = new DisciplineType_MassTypeMaterialBinding_Dictionary();
    }
    return this._disciplineType_MassTypeMaterialBinding_Dictionary;
  }
}