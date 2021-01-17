import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import {Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop : theme.spacing.unit * 3,
        overflowX : "auto"
    },
    table : {
        minWidth : 1080
    }

})


const customers = [
    {
        'id': 1,
        'img': 'https://placeimg.com/64/64/any',
        'name': '홍길동',
        'gender': '남성',
        'birthday': '1월9일',
        'job': '대학생'
    }, {
        'id': 2,
        'img': 'https://placeimg.com/64/64/2',
        'name': '나성민',
        'gender': '남성',
        'birthday': '11월9일',
        'job': '중학생'
    }, {

        'id': 3,
        'img': 'https://placeimg.com/64/64/3',
        'name': '나동민',
        'gender': '남성',
        'birthday': '11월19일',
        'job': '고등학생'
    }
]

class App extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>생년월인</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            customers.map(c => {
                                return (
                                    <Customer
                                        key={c.id}
                                        id={c.id}
                                        img={c.img}
                                        name={c.name}
                                        birthday={c.birthday}
                                        gender={c.gender}
                                        job={c.job}/>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default withStyles(styles)(App);