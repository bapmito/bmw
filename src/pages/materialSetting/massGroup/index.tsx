import React, { useEffect, useState } from 'react';
import './index.css';
import { DisciplineType_MassGroup } from '../../../models/massGroup/DisciplineType_MassGroup';
import { Discipline } from '../../../models/discipline';
import { getDisciplineList, getMassGroupById, updateMassGroup } from '../../../apis/materialSetting';
import {
  CloseOutlined, ShrinkOutlined,
  FolderOutlined, CloseCircleOutlined,
  FolderAddOutlined, EnterOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { Button, Input, Row, Select, Col, Tag, Checkbox } from 'antd';
import { MassGroupFolder } from '../../../models/massGroup/MassGroupFolder';
import { MassGroupComponent } from '../../../models/massGroup/MassGroupComponent';
import { MassGroup } from '../../../models/massGroup/MassGroup';
import {convertMassGroupByPropertyName, notification} from '../../../utils/commonFuntions';
import constants from '../../../constants';

const { Option } = Select;

const MassGroupView = () => {
  const [massGroup, setMassGroup] = useState<DisciplineType_MassGroup[]>([]);
  const [disciplineList, setDisciplineList] = useState<Discipline[]>([]);
  const [disciplineSelected, setDisciplineSelected] = useState<number>(0);
  const [massGroupView, setMassGroupView] = useState<MassGroupComponent>();
  const [optionBreadCrumb, setOptionBreadCrumb] = useState<Array<Array<string>>>([]);

  useEffect(() => {
    // fake prams by id
    const params = {
      id: 1072
    };
    getMassGroupById(params).then(res => {
      setMassGroup(res.data.disciplineType_MassGroups);
    });

    getDisciplineList().then(res => {
      setDisciplineList(res.data);
    });
  }, []);

  const handleChangeInput = (value: any, massGroupComponent: any, field: any) => {
    // @ts-ignore
    massGroupComponent[field] = value;

    setMassGroup([...massGroup]);
  };

  const addSubMassGroup = (massGroupByPropertyName: number, arrSubMass: MassGroupComponent[]) => {
    const name = String(convertMassGroupByPropertyName(massGroupByPropertyName));

    const newSubMassGroup: MassGroupComponent = {
      name,
      description: name,
      massGroups: [],
      horizontal_MassGroupByPropertyName: 0,
      isHaveHorizontalGroup: false,
      massGroupFilterNames: [],
      massGroupFilterType: 0
    };

    arrSubMass.push(newSubMassGroup);
    setMassGroup([...massGroup]);
  };

  const removeSubMassGroup = (e: any, arraySubMassGroup: MassGroupComponent[], index: number) => {
    e.stopPropagation();
    arraySubMassGroup.splice(index, 1);

    setMassGroup([...massGroup]);
  };

  const addLevel = (arrMassGroup: MassGroup[]) => {
    const newMassGroup: MassGroup = {
      massGroupByPropertyName: 0,
      subMassGroupComponents: []
    };

    arrMassGroup.push(newMassGroup);
    setMassGroup([...massGroup]);
  };

  const removeLevel = (massGroups: MassGroup[], index: number) => {
    massGroups.splice(index, 1);

    setMassGroup([...massGroup]);
  };

  const addFilter = (arrayFilter: Array<string>) => {
    const arrFiltered = constants.filterMassGroup.filter((item: any) => {
      return arrayFilter.indexOf(item.name) === -1;
    });

    arrayFilter.push(arrFiltered[0].name);
    setMassGroup([...massGroup]);
  };

  const removeFilter = (arrayFilter: Array<string>, index: number) => {
    arrayFilter.splice(index, 1);

    setMassGroup([...massGroup]);
  };

  const handleChangeFilter = (e: any, arrFilter: Array<string>, index: number) => {
    arrFilter[index] = e;

    setMassGroup([...massGroup]);
  };

  const recursionMassGroup = (massGroupComponent: MassGroupComponent) => {
    const newMassGroupComponent = massGroupView ? massGroupView : massGroupComponent;
    return (
      <div>
        <Row gutter={24}>
          <Col span={8}>
            <Input
              value={newMassGroupComponent.name}
              placeholder="Mã"
              onChange={(e) => handleChangeInput(e.target.value, newMassGroupComponent, 'name')}
            />
          </Col>
          <Col span={16}>
            <Input
              value={newMassGroupComponent.description}
              placeholder="Nội dung"
              onChange={(e) => handleChangeInput(e.target.value, newMassGroupComponent, 'description')}
            />
          </Col>
        </Row>
        <h3 className="mt-10">Bộ lọc</h3>
        <Select
          className="w-100"
          value={newMassGroupComponent.massGroupFilterType}
          onChange={(e) => handleChangeInput(e, newMassGroupComponent, 'massGroupFilterType')}
        >
          {constants.massGroupByPropertyNames.map(item => {
            return (
              <Option key={item.id} value={item.id} >
                {item.name}
              </Option>
            );
          })}
        </Select>
        <div>
          {newMassGroupComponent.massGroupFilterNames.length > 0
          && newMassGroupComponent.massGroupFilterNames.map((item: string, index: number) => {
            return (
              <span>
                <Select
                  className="mt-10"
                  style={{width: 100}}
                  value={item}
                  onChange={(e) => handleChangeFilter(e, newMassGroupComponent.massGroupFilterNames, index)}
                >
                  {constants.filterMassGroup.map(item => {
                    return (
                      <Option key={item.id} value={item.name} >
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
                 <CloseOutlined
                   className="icon-close ml-5 mr-10"
                   onClick={() => removeFilter(newMassGroupComponent.massGroupFilterNames, index)}
                 />
              </span>
            );
          })}
        </div>
        <div className="mt-10 mb-10">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="btn-custom"
            onClick={() => addFilter(newMassGroupComponent.massGroupFilterNames)}
          >
            Bộ lọc
          </Button>
        </div>
        <div className="container-block-setting mt-10">
          <h3 className="mb-10">Phân cấp dọc</h3>
          {newMassGroupComponent.massGroups && newMassGroupComponent.massGroups.length > 0
            && newMassGroupComponent.massGroups.map((item2, index) => {
            return (
              <div key={index} className="mb-5" style={{marginLeft: 10 * index}}>
                <EnterOutlined className="icon-enter mr-5" />
                <Select
                  className="mb-10"
                  style={{width: 190 - index * 10}}
                  value={item2.massGroupByPropertyName}
                  onChange={(e) => handleChangeInput(e, item2, 'massGroupByPropertyName')}
                >
                  {constants.massGroupByPropertyNames.map(item3 => {
                    return (
                      <Option key={item3.id} value={item3.id} >
                        {item3.name}
                      </Option>
                    );
                  })}
                </Select>
                <FolderAddOutlined
                  className="ml-10 icon-folder"
                  onClick={() => addSubMassGroup(item2.massGroupByPropertyName, item2.subMassGroupComponents)}
                />
                <CloseOutlined
                  className="icon-close ml-10"
                  onClick={() => removeLevel(newMassGroupComponent.massGroups, index)}
                />
                {item2.subMassGroupComponents.length > 0 && item2.subMassGroupComponents.map((item4, index) => {
                  return (
                    <span key={index} className="position-relative">
                      <Tag
                        icon={<FolderOutlined />}
                        className="mb-5 cursor-pointer pr-20"
                        onClick={() => setMassGroupView(item4)}
                      >
                      {item4.name}
                    </Tag>
                      <CloseOutlined
                        style={{fontSize: 11, position: 'absolute', top: 3, right: 12, cursor: 'pointer'}}
                        onClick={(e) => removeSubMassGroup(e, item2.subMassGroupComponents, index)}
                      />
                    </span>
                  );
                })}
              </div>
            );
          })}
          <div className="mt-20 mb-10">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="btn-custom" onClick={() => addLevel(newMassGroupComponent.massGroups)}>
              Vật liệu
            </Button>
          </div>
        </div>

        <div className="container-block-setting mt-10">
          <Checkbox
            className="float-left mr-10"
            checked={newMassGroupComponent.isHaveHorizontalGroup}
            onChange={
              (e) =>
                handleChangeInput(e.target.checked, newMassGroupComponent, 'isHaveHorizontalGroup')
            }
          />
          <h3 className="mb-10 float-left">Phân cấp ngang</h3>
          <Select
            className="w-100"
            value={newMassGroupComponent.horizontal_MassGroupByPropertyName}
            onChange={(e) => handleChangeInput(e, newMassGroupComponent, 'horizontal_MassGroupByPropertyName')}
          >
            {constants.massGroupByPropertyNames.map(item => {
              return (
                <Option key={item.id} value={item.id} >
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </div>
      </div>
    );
  };

  const updateMassGroups = () => {
    const data = {
      id: 1072,
      disciplineType_MassGroup_Dictionary: {
        disciplineType_MassGroups: massGroup
      },
    };

    updateMassGroup(data).then(res => {
      if (res.status === constants.SUCCESS_CODE) {
        notification('success', 'Cập nhật nhóm khối lượng thành công!')
      }
    });
  };

  const massGroupFoldersSelected = massGroup && massGroup.length > 0 && massGroup.filter(item => {
    return item.disciplineType === disciplineSelected;
  })[0].massGroupFolders;

  return (
    <div className="container-mass-group">
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
        <Button
          type="primary"
          onClick={updateMassGroups}
        >
          Cập nhật
        </Button>
      </div>

      <div className="panel-material-setting">
        <div className="panel-setting mr-20">
          <div className="panel-setting-header">
            Nhóm khối lượng
            <CloseOutlined
              className="float-right mt-5 cursor-pointer"
              style={{fontSize: 14}}
            />
            <ShrinkOutlined className="float-right mt-5 mr-10 cursor-pointer" style={{fontSize: 14}}/>
          </div>
          <div className="panel-setting-body">
            {massGroupFoldersSelected && massGroupFoldersSelected.length > 0
            && massGroupFoldersSelected.map((item: MassGroupFolder, index: number) => {
              return (
                <div key={index} className="position-relative container-block-setting">
                  <CloseCircleOutlined
                    className="icon-close-circle"
                  />
                  <Input
                    className="mb-10"
                    value={item.name}
                    onChange={(e) => handleChangeInput(e.target.value, item, 'name')}
                  />
                  <div className="mb-10">
                    <Select style={{width: 80}} className="mr-5">
                      <Option value='1'>
                        MEP
                      </Option>
                    </Select>
                    <FolderOutlined className="icon-folder" />
                  </div>
                  {recursionMassGroup(item.mainMassGroupComponent)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {console.log(massGroupFoldersSelected)}
    </div>
  );
}

export default MassGroupView;
