import { List } from '../../list/List';
import { CategoryTypeFilter_FormworkValueBinding } from './CategoryTypeFilter_FormworkValueBinding';

export class CategoryTypeFilter_FormworkValueBinding_Dictionary 
{
  private _categoryTypeFilter_FormworkValueBindings?: List<CategoryTypeFilter_FormworkValueBinding>;
  public get categoryTypeFilter_FormworkValueBindings() : List<CategoryTypeFilter_FormworkValueBinding>
  {
    if (this._categoryTypeFilter_FormworkValueBindings == null)
    {
      this._categoryTypeFilter_FormworkValueBindings = this.GetCategoryTypeFilter_FormworkValueBinding();
    }
    return this._categoryTypeFilter_FormworkValueBindings;
  }

  public set categoryTypeFilter_FormworkValueBindings (value: List<CategoryTypeFilter_FormworkValueBinding> )
  {
    this._categoryTypeFilter_FormworkValueBindings=value;
  }
  public GetCategoryTypeFilter_FormworkValueBinding():
  List<CategoryTypeFilter_FormworkValueBinding>
  {
    var list = new List<CategoryTypeFilter_FormworkValueBinding>();
    var item  = new CategoryTypeFilter_FormworkValueBinding();
    item.categoryTypeFilter_FormworkValueBinding_Dictionary=this;
    list.add(item);
    return list;
  }
}
