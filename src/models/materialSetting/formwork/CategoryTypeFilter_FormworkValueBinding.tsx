import { CategoryTypeFilter_FormworkValueBinding_Dictionary } from './CategoryTypeFilter_FormworkValueBinding_Dictionary';
import { FVB_CategoryTypeFilter } from './FVB_CategoryTypeFilter';
import { FVB_FormworkValueBinding } from './FVB_FormworkValueBinding';

export class CategoryTypeFilter_FormworkValueBinding 
{
  public categoryTypeFilter_FormworkValueBinding_Dictionary:
  CategoryTypeFilter_FormworkValueBinding_Dictionary | undefined;
  private _categoryTypeFilter?: FVB_CategoryTypeFilter;
  public get categoryTypeFilter() : FVB_CategoryTypeFilter
  {
    if (this._categoryTypeFilter == null)
    {
      this._categoryTypeFilter = new FVB_CategoryTypeFilter();
    }
    return this._categoryTypeFilter;
  }

  mainValueBinding?: FVB_FormworkValueBinding
}
