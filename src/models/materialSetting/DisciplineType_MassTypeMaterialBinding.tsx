import { MassTypeMaterialsBinding } from './MassTypeMaterialsBinding';
import { List } from '../list/List';
import { extension } from '../extension/Extension'
import { MassTypeUtil } from '../mass/MassType'
import { DisciplineType } from '../discipline/DisciplineType';

export class DisciplineType_MassTypeMaterialBinding {
  public disciplineType: DisciplineType = DisciplineType.Structural;

  private _massTypeMaterialsBindings?: List<MassTypeMaterialsBinding>
  public get massTypeMaterialsBindings(): List<MassTypeMaterialsBinding> {
    if (this._massTypeMaterialsBindings == null){
      this._massTypeMaterialsBindings = this.getMassTypeMaterialsBindings();
    }
    return this._massTypeMaterialsBindings;
  }

  getMassTypeMaterialsBindings(): List<MassTypeMaterialsBinding>{
    var list = new List<MassTypeMaterialsBinding>();
    var disciplineType = this.disciplineType;
    MassTypeUtil.Get(disciplineType).items.forEach((i, idx) =>{
      var item = new MassTypeMaterialsBinding();
      item.massType = i;
      list.add(item);
    });
    return list;
  }
}
