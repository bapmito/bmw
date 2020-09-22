import { StringFilterType } from "../../filter/DisciplineType";
import { List } from "../../list/List";

export class FVB_CategoryTypeFilter {
  public categoryFilterType: StringFilterType  = StringFilterType.ByContain;

  private _categoryFilterNames?: List<string>;
  public get categoryFilterNames(): List<string>{
    if (this._categoryFilterNames == null){
      this._categoryFilterNames = new List<string>();
    }
    return this._categoryFilterNames;
  }
}
