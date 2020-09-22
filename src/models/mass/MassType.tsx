import { DisciplineType } from '../discipline/DisciplineType';
import { List } from '../list/List'

export enum MassType {
  Concrete = 0, Formwork = 1, Rebar = 2, Formwork_Bottom = 3, LeanConcrete = 4,
  BrickWork = 5, PaintWork = 6, PlasterWork = 7, FloorFinish = 8,
  Electrical = 9, Plumbing = 10, HVAC = 11, FireFighting = 12,
  Undefined = 13,
  Lintel = 14, SubColumn = 15
}

export class MassTypeUtil {
  static Get(disciplineType: DisciplineType): List<MassType> {
    var list = null;
    switch (disciplineType) {
      case DisciplineType.Structural:
        list = this.GetStructuralList();
      case DisciplineType.Architect:
        list = this.GetArchitectList();
      case DisciplineType.MEP:
        list = this.GetMEPList();
    }
    return list;
  }

  static GetStructuralList(): List<MassType> {
    var list = new List<MassType>();
    list.add(MassType.Concrete);
    list.add(MassType.LeanConcrete);
    list.add(MassType.Formwork);
    list.add(MassType.Rebar);

    return list;
  }

  static GetArchitectList(): List<MassType> {
    var list = new List<MassType>();
    list.add(MassType.BrickWork);
    list.add(MassType.PlasterWork);
    list.add(MassType.Lintel);
    list.add(MassType.SubColumn);
    list.add(MassType.FloorFinish);
    list.add(MassType.PaintWork);
    return list;
  }

  static GetMEPList(): List<MassType> {
    var list = new List<MassType>();
    list.add(MassType.Electrical);
    list.add(MassType.Plumbing);
    list.add(MassType.HVAC);
    list.add(MassType.FireFighting);

    return list;
  }
}