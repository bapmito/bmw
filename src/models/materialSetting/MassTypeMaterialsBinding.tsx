import { MaterialBindings } from './MaterialBindings';
import { CategoryTypeFilter_FormworkValueBinding_Dictionary } from './formwork/CategoryTypeFilter_FormworkValueBinding_Dictionary';
import { MassType } from '../mass/MassType';
import { List } from '../list/List';

export class MassTypeMaterialsBinding {
  public massType: MassType = MassType.Concrete;

  private _materialBindings? : List<MaterialBindings>;
  public get materialBindings() : List<MaterialBindings>{
    if (this._materialBindings == null){
      this._materialBindings = new List<MaterialBindings>();
    }
    return this._materialBindings;
  }
  public set materialBindings(value : List<MaterialBindings>){
    this._materialBindings = value;
  }
  
  private _categoryTypeFilter_FormworkValueBinding_Dictionary? : CategoryTypeFilter_FormworkValueBinding_Dictionary;
  public get categoryTypeFilter_FormworkValueBinding_Dictionary() : CategoryTypeFilter_FormworkValueBinding_Dictionary{
    if (this._categoryTypeFilter_FormworkValueBinding_Dictionary == null){
      this._categoryTypeFilter_FormworkValueBinding_Dictionary = new CategoryTypeFilter_FormworkValueBinding_Dictionary();
    }
    return this._categoryTypeFilter_FormworkValueBinding_Dictionary;
  }
  public set categoryTypeFilter_FormworkValueBinding_Dictionary(value : CategoryTypeFilter_FormworkValueBinding_Dictionary){
    this._categoryTypeFilter_FormworkValueBinding_Dictionary = value;
  }
}
