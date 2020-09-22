import { DisciplineType } from '.././discipline/DisciplineType';
import { List } from '../list/List';

export class BoQData {
    private static _instance: BoQData;
    public static get instance(): BoQData {
        if (this._instance == null) {
            this._instance = new BoQData();
        }
        return this._instance;
    }

    private _disciplineTypeStorageList?: List<DisciplineType>;
    public get disciplineTypeStorageList(): List<DisciplineType> {
        if (this._disciplineTypeStorageList == null) {
            this._disciplineTypeStorageList = this.getDisciplineTypeStorageList();
        }
        return this._disciplineTypeStorageList;
    }

    getDisciplineTypeStorageList(): List<DisciplineType> {
        var list = new List<DisciplineType>();
        list.add(DisciplineType.Structural);
        list.add(DisciplineType.Architect);
        list.add(DisciplineType.MEP);
        return list;
    }
}