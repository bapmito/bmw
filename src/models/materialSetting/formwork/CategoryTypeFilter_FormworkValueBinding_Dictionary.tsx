import { List } from '../../list/List';
import { CategoryTypeFilter_FormworkValueBinding } from './CategoryTypeFilter_FormworkValueBinding';

export class CategoryTypeFilter_FormworkValueBinding_Dictionary {
  private _categoryTypeFilter_FormworkValueBindings?: List<CategoryTypeFilter_FormworkValueBinding>;
  public get categoryTypeFilter_FormworkValueBindings() : List<CategoryTypeFilter_FormworkValueBinding>{
    if (this._categoryTypeFilter_FormworkValueBindings == null){
      this._categoryTypeFilter_FormworkValueBindings = new List<CategoryTypeFilter_FormworkValueBinding>();
    }
    return this._categoryTypeFilter_FormworkValueBindings;
  }
  public set categoryTypeFilter_FormworkValueBindings(value: List<CategoryTypeFilter_FormworkValueBinding>){
    this._categoryTypeFilter_FormworkValueBindings = value;
  }
}
