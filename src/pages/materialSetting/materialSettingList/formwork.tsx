import React, { useEffect, useState } from 'react';
import { Collapse, Row, Select, Col, Button, Input } from 'antd';
import constants from '../../../constants';
import { PlusSquareOutlined, CloseCircleOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { MassTypeMaterialsBindings } from '../../../models/materialSetting/MassTypeMaterialsBiding';
import { MainValueBinding } from '../../../models/materialSetting/formwork/FVB_FormworkValueBinding';
import {
  CategoryTypeFilter_FormworkValueBindings
} from '../../../models/materialSetting/formwork/CategoryTypeFilter_FormworkValueBinding';
import { addKeyForObject } from '../../../utils/commonFuntions';

const { Panel } = Collapse;
const { Option } = Select;

interface Props {
  data: MassTypeMaterialsBindings,
  updateData: any,
}

const FormWork = React.memo((props: Props) => {
  const [data, setData] = useState<CategoryTypeFilter_FormworkValueBindings[]>([]);

  useEffect(() => {
    const data = props.data.categoryTypeFilter_FormworkValueBinding_Dictionary
      .categoryTypeFilter_FormworkValueBindings;

    data.length > 0 && data.map(item => {
      addKeyForObject(item.mainValueBinding);
    });

    setData(data);
  }, [props.data.categoryTypeFilter_FormworkValueBinding_Dictionary
    .categoryTypeFilter_FormworkValueBindings]);

  const addFilter = (e: any, categoryFilterNames: any) => {
    e.stopPropagation();

    const arrFiltered = constants.parameterSettingFilterOptions.filter((item: any) => {
      return categoryFilterNames.indexOf(item.text) === -1;
    });

    categoryFilterNames.push(arrFiltered[0].text);
    setData([...data]);
  };

  const handleChangeFilter = (e: any, categoryFilterNames: Array<string>, index: number) => {
    categoryFilterNames[index] = e;

    props.updateData([...data]);
  };

  const removeFilter  = (categoryFilterNames: Array<string>, index: number) => {
    categoryFilterNames.splice(index, 1);

    props.updateData([...data]);
  }

  const header = (categoryFilterNames: Array<string>) => {
    return (
      <div>
        <PlusSquareOutlined className="icon-plus-quare mr-10" onClick={(e) => addFilter(e, categoryFilterNames)} />
        {categoryFilterNames.length > 0 && categoryFilterNames.map((item: any, index: number) => {
          return (
            <span key={index} className="mr-10">
              <Select
                value={item}
                style={{width: 80}}
                onChange={(e) => handleChangeFilter(e, categoryFilterNames, index)}
                onClick={(e: any) => e.stopPropagation()}
              >
                {constants.parameterSettingFilterOptions.map(item => {
                  return (
                    <Option key={item.key} value={item.text} >
                      {item.text}
                    </Option>
                  );
                })}
              </Select>
              <CloseOutlined className="icon-close ml-5" onClick={() => removeFilter(categoryFilterNames, index)} />
            </span>
          );
        })}
      </div>
    )
  };

  const addMainValueBinding = (arr: MainValueBinding[]) => {
    const newData = [...data];

    arr.push(JSON.parse(JSON.stringify(constants.initSubValueBindingsForJson)));

    props.updateData(newData)
  };

  const changeParameter = (e: any, item: MainValueBinding) => {
    const newData = [...data];
    item.valueBindingType = e;
    if (e === 1) {
      item.subValueBindingsForJson = [
        JSON.parse(JSON.stringify(constants.initSubValueBindingsForJson))
      ];
    } else {
      item.subValueBindingsForJson = [];
    }

    props.updateData(newData);
  }

  const removeParameter = (parent: MainValueBinding, item: MainValueBinding, index: number, indexRoot: number) => {
    const newData = [...data];

    if (JSON.stringify(parent) === JSON.stringify(item)) {
      data.splice(indexRoot, 1);
    } else if (parent.subValueBindingsForJson.length === 1) {
      findGrandFather(indexRoot, parent.key);
    } else {
      parent.subValueBindingsForJson.splice(index, 1);
    }

    props.updateData(newData);
  };

  const findGrandFather = (indexRoot: number, key: any) => {
    if (data[indexRoot].mainValueBinding?.subValueBindingsForJson.length === 1) {
      data[indexRoot].mainValueBinding = null;
    } else {
      recursionFindElement(data[indexRoot].mainValueBinding?.subValueBindingsForJson, key);
    }
  };

  const recursionFindElement = (arr: any, key: string) => {
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].key === key) {
          arr.splice(i, 1);
          break;
        } else {
          recursionFindElement(arr[i].subValueBindingsForJson, key);
        }
      }
    }
  };

  const handleChangeInput = (value: any, item: any, field: string) => {
    item[field] = value;

    props.updateData([...data]);
  };

  const recursionMainValueBinding = (parent: MainValueBinding, mainValueBindingArr: MainValueBinding[], indexRoot: number) => {
    return (
      <div>
        {mainValueBindingArr && mainValueBindingArr.length > 0 && mainValueBindingArr.map((item: MainValueBinding, index: number) => {
          return (
            <div key={index} className="position-relative">
              <CloseCircleOutlined
                onClick={() => removeParameter(parent, item, index, indexRoot)}
                className="icon-close-circle"
              />
              <div className="container-block-setting mb-10">
                <Row className="mb-10">
                  <Col span={14}>
                    <Input
                      className="w-97"
                      value={item.name}
                      onChange={(e) => handleChangeInput(e.target.value, item, 'name')}
                    />
                  </Col>
                  <Col span={10}>
                    <Select
                      className="w-100"
                      value={item.valueBindingType}
                      onChange={(e) => changeParameter(e, item)}
                    >
                      {constants.parameters.map(item => {
                        return (
                          <Option key={item.key} value={item.value}>
                            {item.text}
                          </Option>
                        );
                      })}
                    </Select>
                  </Col>
                </Row>

                {item.valueBindingType === 0 && (
                  <div>
                    <Row className="mb-10">
                      <Col span={8}>
                        Parameter:
                      </Col>
                      <Col span={16}>
                        <Select
                          className="w-100"
                          value={item.parameterNameForJson}
                          onChange={(e) => handleChangeInput(e, item, 'parameterNameForJson')}
                        >
                          {constants.parameterTypes.map((item, index) => {
                            return (
                              <Option key={index} value={item.text}>
                                {item.text}
                              </Option>
                            );
                          })}
                        </Select>
                      </Col>
                    </Row>
                    <Row className="mb-10">
                      <Col span={8}>
                        Đơn vị:
                      </Col>
                      <Col span={16}>
                        <Select
                          className="w-100"
                          value={item.massCalculateBy}
                          onChange={(e) => handleChangeInput(e, item, 'massCalculateBy')}
                        >
                          {constants.parameterUnits.map(item => {
                            return (
                              <Option key={item.key} value={item.value}>
                                {item.text}
                              </Option>
                            );
                          })}
                        </Select>
                      </Col>
                    </Row>
                  </div>
                )}

                <div>{recursionMainValueBinding(item, item.subValueBindingsForJson, indexRoot)}</div>

                {item.valueBindingType === 1 && (
                  <PlusSquareOutlined
                    onClick={() => addMainValueBinding(item.subValueBindingsForJson)}
                    className="icon-plus-quare mr-10"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const addFormworkFilter = () => {
    const newData = [...data];

    newData.push(JSON.parse(JSON.stringify(constants.initFormworkValue)));
    props.updateData(newData);
  };

  return (
    <div>
      {data.map((item, index) => {
        if (item.mainValueBinding) {
          return (
            <Collapse
              key={index}
              expandIconPosition={'right'}
              defaultActiveKey={['1']}
              className="mb-10"
            >
              <Panel header={header(item.categoryTypeFilter.categoryFilterNames)} key="1">
                {recursionMainValueBinding(item.mainValueBinding, [item.mainValueBinding], index)}
              </Panel>
            </Collapse>
          )
        } else {
          return (<></>)
        }
      })}
      <div className="mt-20 mb-10">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="btn-custom"
          onClick={addFormworkFilter}
        >
          Bộ lọc
        </Button>
      </div>
    </div>
  );
});

export default FormWork;
