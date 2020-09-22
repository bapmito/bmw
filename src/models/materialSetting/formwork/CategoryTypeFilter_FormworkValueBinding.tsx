import { FVB_CategoryTypeFilter } from './FVB_CategoryTypeFilter';
import { FVB_FormworkValueBinding } from './FVB_FormworkValueBinding';

<<<<<<< HEAD
export class CategoryTypeFilter_FormworkValueBinding {
  private _categoryTypeFilter?: FVB_CategoryTypeFilter;
  public get categoryTypeFilter() : FVB_CategoryTypeFilter{
    if (this._categoryTypeFilter == null){
      this._categoryTypeFilter = new FVB_CategoryTypeFilter();
    }
    return this._categoryTypeFilter;
  }

  mainValueBinding?: FVB_FormworkValueBinding
=======
export interface CategoryTypeFilter_FormworkValueBindings {
  categoryTypeFilter: CategoryTypeFilter,
  mainValueBinding: MainValueBinding | null,
>>>>>>> a766598c25e3ae73d733171bc1194e9e3ba5f2b3
}
