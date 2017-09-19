import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Provider from '../Provider'
import './index.css'

const HeaderTextField = (props) => {
    return (
        <TextField
            floatingLabelText={props.title}
            floatingLabelFixed={true}
            floatingLabelStyle={{ color: '#fff' }}
            floatingLabelFocusStyle={{ color: '#fff' }}
            hintText={props.placeholder}
            hintStyle={{ color: 'rgba(255,255,255,0.7)' }}
            underlineFocusStyle={{ borderBottom: '2px solid #fff' }}
        />
    )
}


const provinces = ["北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "海南省", "四川省", "贵州省", "云南省", "西藏自治区", "陕西省", "甘肃省", "青海省", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区", "台湾"]

const items = provinces.map((provice, index) => <MenuItem key={index} value={provice} primaryText={provice} />)

class HeaderSelectField extends Component {
    state = {
        value: this.props.value || null
    }
    handleChange = (e, index, value) => this.setState({ value })
    render() {
        return (
            <SelectField
                floatingLabelText="地区"
                floatingLabelFixed={true}
                floatingLabelStyle={{ color: '#fff' }}
                hintText="请选择地区"
                hintStyle={{ color: 'rgba(255,255,255,0.7)' }}
                value={this.state.value}
                onChange={this.handleChange}
                labelStyle={{ color: '#fff' }}
                style={{ textAlign: 'left' }}
            >
                {this.props.children}
            </SelectField>
        )
    }
}

const headerElements = (
    <div className="header-elements">
        <HeaderTextField
            title="文章标题"
            placeholder="请输入文章标题"
        />
        <HeaderTextField
            title="作者"
            placeholder="请输入文章作者名字"
        />
        <HeaderSelectField>
            {items}
        </HeaderSelectField>
    </div>
)


class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider {...this.props}>
                <AppBar
                    title={headerElements}
                    titleStyle={{
                        textAlign: 'center',
                        height: 75
                    }}
                    style={{
                        position: 'fixed',
                        top: 0
                    }}
                />
            </Provider>
        )
    }
}

export default Header