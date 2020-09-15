import React, { useEffect, useState } from 'react';
import { getMaterialSettings, updateMaterialSettings } from '../../../apis/materialSetting'
import { BoQ_Project } from '../../../models/BoQ_Project';
import { CloseOutlined, ShrinkOutlined } from '@ant-design/icons';
import Concrete from './concrete';
import FormWork from './formwork';
import { Select, Button } from 'antd';
import constants from '../../../constants';
import { MaterialBindings } from '../../../models/materialSetting/MaterialBindings';
import { notification } from '../../../utils/commonFuntions';
import { MassTypeMaterialsBindings } from '../../../models/materialSetting/MassTypeMaterialsBiding';

const { Option } = Select;

const MaterialSettingList = React.memo(() => {
  const [materialSettings, setMaterialSettings] = useState<BoQ_Project[]>([]);

  useEffect(() => {
    getMaterialSettings().then((res: any) => {
      setMaterialSettings(res.data);
    });
  }, []);

  const updateData = (data: any, fieldName: string, index: number) => {
    const newMaterialSetting = [...materialSettings];

    const newData = newMaterialSetting[6].disciplineType_MassTypeMaterialBinding_Dictionary
      .disciplineType_MassTypeMaterialBindings[0].massTypeMaterialsBindings[index]

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

  const handleChangeMassType = (e: any, item: MassTypeMaterialsBindings) => {
    item.massType = e;
    switch (e) {
      case 0:
        item.materialBindings = [
          JSON.parse(JSON.stringify(constants.initConcreteValue))
        ];
        item.categoryTypeFilter_FormworkValueBinding_Dictionary.categoryTypeFilter_FormworkValueBindings = [];
        break;
      case 1:
        item.categoryTypeFilter_FormworkValueBinding_Dictionary.categoryTypeFilter_FormworkValueBindings = [
          JSON.parse(JSON.stringify(constants.initFormworkValue))
        ];
        item.materialBindings = [];
        break;
      default: break;
    }

    setMaterialSettings([...materialSettings]);
  };

  const addMaterialSetting = () => {
    const newData = materialSettings[6].disciplineType_MassTypeMaterialBinding_Dictionary
      .disciplineType_MassTypeMaterialBindings[0].massTypeMaterialsBindings;

    newData.push(JSON.parse(JSON.stringify(constants.initMaterialSetting)));
    setMaterialSettings([...materialSettings]);
  };

  const removeMaterialSetting = (index: number) => {
    const newData = materialSettings[6].disciplineType_MassTypeMaterialBinding_Dictionary
      .disciplineType_MassTypeMaterialBindings[0].massTypeMaterialsBindings;

    newData.splice(index, 1);
    setMaterialSettings([...materialSettings]);
  };

  return (
    <div>
      <div className="mb-10">
        <Button
          type="primary"
          className="mr-20"
          onClick={addMaterialSetting}
        >
          Thêm thiết lập vật liệu
        </Button>
        <Button type="primary" onClick={updateMaterialSetting}>Cập nhật</Button>
      </div>
      <div className="panel-material-setting">
        {materialSettings && materialSettings[6]
        && materialSettings[6].disciplineType_MassTypeMaterialBinding_Dictionary
          .disciplineType_MassTypeMaterialBindings[0].massTypeMaterialsBindings.map((item, index) => {
          return (
            <div className="panel-setting mr-20" key={index}>
              <div className="panel-setting-header">
                Thiết lập vật liệu
                <CloseOutlined
                  className="float-right mt-5 cursor-pointer"
                  style={{ fontSize: 14 }}
                  onClick={() => removeMaterialSetting(index)}
                />
                <ShrinkOutlined className="float-right mt-5 mr-10 cursor-pointer" style={{ fontSize: 14 }}/>
              </div>
              <div className="panel-setting-body">
                <Select
                  className="w-100 mb-10"
                  value={item.massType}
                  onChange={(e) => handleChangeMassType(e, item)}
                >
                  {constants.subjectOptions.map(subject => {
                    return (
                      <Option key={subject.key} value={subject.value}>
                        {subject.text}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <div className="panel-setting-body">
                {item.massType === 0 && (
                  <Concrete
                    data={item}
                    updateData={(data: MaterialBindings[]) => updateData(data, 'concrete', index)} />
                )}
                {item.massType === 1 && (
                  <FormWork
                    data={item}
                    updateData={(data: MaterialBindings[]) => updateData(data, 'formwork', index)}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
});

export default MaterialSettingList;
