<<<<<<< HEAD
import { List } from "../../list/List";
import { MassCalculateBy } from "../../mass/MassCalculateBy";
import { FVB_FormworkValueBindingType } from "./FVB_FormworkValueBindingType";

export class FVB_FormworkValueBinding {
  name: string  = "Tên phân nhóm";

  valueBindingType: FVB_FormworkValueBindingType = FVB_FormworkValueBindingType.ByParameter;

  parameterNameForJson: string = "";

  private _subValueBindingsForJson?: List<FVB_FormworkValueBindingType>;
  public get subValueBindingsForJson(): List<FVB_FormworkValueBindingType>{
    if (this._subValueBindingsForJson == null){
      this._subValueBindingsForJson = new List<FVB_FormworkValueBindingType>();
    }
    return this._subValueBindingsForJson;
  }

  massCalculateBy: MassCalculateBy = MassCalculateBy.ByArea;
=======
export interface MainValueBinding {
  key?: string,
  name: string,
  valueBindingType: number,
  parameterNameForJson: string,
  subValueBindingsForJson: MainValueBinding[],
  massCalculateBy: number,
>>>>>>> a766598c25e3ae73d733171bc1194e9e3ba5f2b3
}
