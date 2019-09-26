import _ from 'lodash'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, FlatList} from 'react-native'
import {employeeFetch} from '../actions'
import ListItem from './ListItem'

class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeeFetch()
    }

    renderRow(item) {
        return (
            <ListItem employee={item} />
        );
    }

    render() {
        return(
            <FlatList
                data={this.props.employeeList}
                renderItem={this.renderRow.bind(this)}
                ItemSeparatorComponent={() => {
                    return(
                        <View style={{height: 1}} />
                    );
                }}
                keyExtractor={item => item.name}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const employeeList = _.map(state.employee.employeeList, (val, uid) => {
        return {...val, uid}
    })

    return {employeeList}
}

export default connect(mapStateToProps, {employeeFetch})(EmployeeList)