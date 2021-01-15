const Database = [{questions: [{
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
}]}]
export default Database;