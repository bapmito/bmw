import React, { useEffect, useState } from 'react';
import { Select, Button } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import constants from '../../../constants';
<<<<<<< HEAD
import { MassTypeMaterialsBindings } from '../../../models/materialSetting/MassTypeMaterialsBinding';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
=======
import { MassTypeMaterialsBindings } from '../../../models/materialSetting/MassTypeMaterialsBiding';
import { MaterialBindings } from '../../../models/materialSetting/MaterialBindings';
import { Material } from '../../../models/material';
import { getMaterialList } from '../../../apis/materialSetting';
>>>>>>> a766598c25e3ae73d733171bc1194e9e3ba5f2b3

const { Option } = Select;

interface Props {
  data: MassTypeMaterialsBindings,
  updateData: any,
}

const Concrete = React.memo((props: Props) => {
  const [data, setData] = useState<MaterialBindings[]>([]);
  const [materialList, setMaterialList] = useState<Material[]>([]);

  useEffect(() => {
    setData(props.data.materialBindings);
  }, [props.data.materialBindings]);

  useEffect(() => {
    getMaterialList().then(res => {
      setMaterialList(res.data);
    });
  }, []);

  const changeMaterial = (e: any, index: number) => {
    const newData = [...data];
    newData[index].materialName = e;

    props.updateData(newData);
  };

  const addMaterial = () => {
    const newData = [...data];
    newData.push(JSON.parse(JSON.stringify(constants.initConcreteValue)));

    props.updateData(newData);
  };

  const removeMaterial = (e: any, index: number) => {
    const newData = [...data];
    newData.splice(index, 1);

    props.updateData(newData);
  };

  return (
    <div>
      {data.length > 0 && data.map((item, index) => {
        return (
          <div key={index}>
            <Select
              value={item.materialName}
              className="w-88 mb-10"
              onChange={(e) => changeMaterial(e, index)}
            >
              {materialList && materialList.length > 0 && materialList.map(item => {
                return (
                  <Option key={item.id} value={item.name}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
            <CloseOutlined className="icon-close ml-10" onClick={(e) => removeMaterial(e, index)} />
          </div>
        )
      })}
      <div className="mt-20 mb-10">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="btn-custom" onClick={addMaterial}>
          Vật liệu
        </Button>
      </div>
    </div>
  );
});

export default Concrete;
