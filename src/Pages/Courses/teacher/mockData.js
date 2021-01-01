import moment from 'moment';
const mockData = [{
    title: '计算机系统原理测试三',
    date1: new moment("2021.1.25 19:30"),
    sdate1: "2020.12.30 19:30",
    date2: new moment("2021.1.25 21:30"),
    sdate2: "2020.12.30 19:30",
    time: 120,
    stage: '未开始',
    questions: [{
        type:0,
        tigan:'我有一个苹果，小明再给我一个苹果，那我现在有几个苹果？',
        fenzhi: 10,
        options:[{
            content: '2',
            option: 'A',
            key: 0
          },{
            content: '3',
            option: 'B',
            key: 1
          },{
            content: '4',
            option : 'C',
            key : 2
          },{
            content: '5',
            option : 'D',
            key : 3
          }],
        answer: 0
    }, {
        type:1,
        tigan:'下列哪些数是质数',
        fenzhi: 10,
        options:[{
            content: '1',
            option: 'A',
            key: 0
          },{
            content: '2',
            option: 'B',
            key: 1
          },{
            content: '3',
            option : 'C',
            key : 2
          },{
            content: '4',
            option : 'D',
            key : 3
          }],
        answer: [1, 2],

    },{
        type:2,
        tigan:'我有一个苹果，小明再给我两个苹果，那我现在有三个苹果',
        fenzhi: 10,
        answer: 0
    },{
        type:3,
        tigan:'我有一个苹果，小明再给我十个苹果，那我现在有几个苹果？',
        fenzhi: 10,
        answer: '11'
    }, {
        type:4,
        tigan:'给出质数的定义',
        fenzhi: 10,
    }]
}, {
    title: '计算机系统原理测试二',
    date1: new moment("2020.12.30 19:30"),
    sdate1: "2020.12.30 19:30",
    date2: new moment("2021.1.30 19:30"),
    sdate2: "2020.12.30 19:30",
    time: 120,
    stage: '进行中',
    questions: [{
        type:2,
        tigan:'我有一个苹果，小明再给我两个苹果，那我现在有三个苹果',
        fenzhi: 10,
        answer: 0
    }]
}, {
    title: '计算机系统原理测试一',
    date1: new moment("2020.12.30 19:30"),
    sdate1: "2020.12.30 19:30",
    date2: new moment("2020.12.30 21:30"),
    sdate2: "2020.12.30 19:30",
    time: 120,
    stage: '已结束',
    questions: [{
        type:3,
        tigan:'我有一个苹果，小明再给我十个苹果，那我现在有几个苹果？',
        fenzhi: 10,
        answer: '11'
    }, {
        type:4,
        tigan:'给出质数的定义',
        fenzhi: 10,
    }]
}];

export default mockData;