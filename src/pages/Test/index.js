import React, {PureComponent} from 'react';
import {Carousel, Input, Icon, Rate, Button,Modal} from 'antd';
import util, {reactUtil} from 'wangct-util';
import {request,history,dispatch} from '../../../entry/lib';

import css from './index.less';

import IMG from '../../assets/id_user.jpg';


const {getProps} = reactUtil;
export default class Home extends PureComponent {
  render() {
    return <div className={css.container}>
      <img width={200} src={IMG} alt="wd" />
      测试页面hello world！d
    </div>
  }
}