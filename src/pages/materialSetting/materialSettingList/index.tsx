import React, { useEffect, useState } from 'react';
import {
  getDisciplineList,
  getMassTypeList,
  getMaterialSettings,
  updateMaterialSettings
} from '../../../apis/materialSetting'
import './index.css';
import { BoQ_Project } from '../../../models/BoQ_Project';
import { CloseOutlined, ShrinkOutlined } from '@ant-design/icons';
import Concrete from './concrete';
import FormWork from './formwork';
import { Select, Button } from 'antd';
import constants from '../../../constants';
import { MaterialBindings } from '../../../models/materialSetting/MaterialBindings';
import { notification } from '../../../utils/commonFuntions';
import { Discipline } from '../../../models/discipline';
import { MassType } from '../../../models/massType';

const { Option } = Select;

const MaterialSettingList = React.memo(() => {
  const [materialSettings, setMaterialSettings] = useState<BoQ_Project[]>([]);
  const [disciplineList, setDisciplineList] = useState<Discipline[]>([]);
  const [massTypeList, setMassTypeList] = useState<MassType[]>([]);
  const [disciplineSelected, setDisciplineSelected] = useState(0);
  const [massTypeSelected, setMassTypeSelected] = useState(0);

  useEffect(() => {
    getMaterialSettings().then((res: any) => {
      setMaterialSettings(res.data);
    });

    getDisciplineList().then(res => {
      setDisciplineList(res.data);
    });

    getMassTypeList().then(res => {
      setMassTypeList(res.data);
    });
  }, []);

  const updateData = (data: any, fieldName: string) => {
    const newMaterialSetting = [...materialSettings];

    const newData = newMaterialSetting[6].disciplineType_MassTypeMaterialBinding_Dictionary
      .disciplineType_MassTypeMaterialBindings[0].massTypeMaterialsBindings[disciplineSelected];

    if (fieldName === 'formwork') {
      newData.categoryTypeFilter_FormworkValueBinding_Dictionary.categoryTypeFilter_FormworkValueBindings = data;
    } else {
      newData.materialBindings = data;
    }

    setMaterialSettings(newMaterialSetting);
  };

  const updateMaterialSetting = () => {
    updateMaterialSettings(materialSettings[6]).then((res) => {
      if (res.status === constants.SUCCESS_CODE) {
        notification('success', 'Cập nhật thiết lập vật liệu thành công!')
      }
    });
  };

  const handleChangeMassType = (e: any) => {
    setMassTypeSelected(e);
  };

  const dataMassType = materialSettings && materialSettings[6]
    && materialSettings[6].disciplineType_MassTypeMaterialBinding_Dictionary
      .disciplineType_MassTypeMaterialBindings[disciplineSelected].massTypeMaterialsBindings;

  const dataMassTypeFiltered = dataMassType && dataMassType.length > 0 && dataMassType.filter(item => {
    return item.massType === massTypeSelected;
  })[0];

  return (
    <div className="container-material-setting">
      <div className="mb-10">
        <Select
          style={{width: 200}}
          className="mr-20"
          value={disciplineSelected}
          onChange={(e) => setDisciplineSelected(e)}
        >
          {disciplineList && disciplineList.length > 0 && disciplineList.map((item: Discipline, index: number) => {
            return (
              <Option key={index} value={item.id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
        <Button type="primary" onClick={updateMaterialSetting}>Cập nhật</Button>
      </div>
      {dataMassTypeFiltered && (
        <div className="panel-material-setting">
          <div className="panel-setting mr-20">
            <div className="panel-setting-header">
              Thiết lập vật liệu
              <CloseOutlined
                className="float-right mt-5 cursor-pointer"
                style={{ fontSize: 14 }}
              />
              <ShrinkOutlined className="float-right mt-5 mr-10 cursor-pointer" style={{ fontSize: 14 }}/>
            </div>
            <div className="panel-setting-body">
              <Select
                className="w-100 mb-10"
                value={massTypeSelected}
                onChange={handleChangeMassType}
              >
                {massTypeList && massTypeList.length > 0 && massTypeList.map(item => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className="panel-setting-body">
              {dataMassTypeFiltered.massType === 0 && (
                <Concrete
                  data={dataMassTypeFiltered}
                  updateData={(data: MaterialBindings[]) => updateData(data, 'concrete')} />
              )}
              {dataMassTypeFiltered.massType === 1 && (
                <FormWork
                  data={dataMassTypeFiltered}
                  updateData={(data: MaterialBindings[]) => updateData(data, 'formwork')}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default MaterialSettingList;
