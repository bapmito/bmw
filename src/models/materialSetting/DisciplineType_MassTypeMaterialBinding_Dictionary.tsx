import { BoQData } from '../single/BoQData';
import { DisciplineType_MassTypeMaterialBinding } from './DisciplineType_MassTypeMaterialBinding';
import { List } from '../list/List';

export class DisciplineType_MassTypeMaterialBinding_Dictionary {
  private _disciplineType_MassTypeMaterialBindings?: List<DisciplineType_MassTypeMaterialBinding>
  public get disciplineType_MassTypeMaterialBindings() : List<DisciplineType_MassTypeMaterialBinding>{
    if (this._disciplineType_MassTypeMaterialBindings == null){
      this._disciplineType_MassTypeMaterialBindings = this.getDisciplineType_MassTypeMaterialBindings();
    }
    return this._disciplineType_MassTypeMaterialBindings;
  }

  getDisciplineType_MassTypeMaterialBindings():List<DisciplineType_MassTypeMaterialBinding>{
    var list = new List<DisciplineType_MassTypeMaterialBinding>()
      var dist = BoQData.instance.disciplineTypeStorageList.items.forEach((value, index) => {
        var item = new DisciplineType_MassTypeMaterialBinding();
        item.disciplineType = value;
        list.add(item);
      });
      return list;
  }
}
