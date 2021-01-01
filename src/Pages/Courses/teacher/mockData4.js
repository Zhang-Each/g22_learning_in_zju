import Markdown from 'react-remarkable';
const lalala2 = [{
    name: '库蒂尼奥',
    std: '3180103811',
    score: '未批阅',
    title: "BNF推导",
    content: "用BNF推导 A=A*B+C*A",
    get:0,
    answer: `
    \`\`\`
    <assign>
    =><id>=<expr>
    =>A=<expr>
    =>A=<expr>+<term>
    =>A=<term>+<term>
    =>A=<term>*<factor>+<term>
    =>A=<factor>*<factor>+<term>
    =>A=<id>*<factor>+<term>
    =>A=A*<factor>+<term>
    =>A=A*<id>+<term>
    =>A=A*B+<term>
    =>A=A*B+<term>*<factor>
    =>A=A*B+<factor>*<factor>
    =>A=A*B+<id>*<factor>
    =>A=A*B+C*<factor>
    =>A=A*B+C*<id>
    =>A=A*B+C*A
    \`\`\`
        `,
    complain: "我认为不正确",
    comment:''
}, {
    name: '格列兹曼',
    std: '3180103812',
    score: '未批阅',
    get:0,
    title: "BNF推导",
    content: "用BNF推导 A=A*B+C*A",
    answer: `
    \`\`\`
    <assign>
    =><id>=<expr>
    =>A=A*B+C*A
    \`\`\`
        `,
    complain: "",
    comment:''
    
},{
    name: '法蒂',
    std: '3180103813',
    get:0,
    score: '未批阅',
    title: "BNF推导",
    content: "用BNF推导 A=A*B+C*A",
    answer:'不会做',
    complain: "",
    comment:''

}];

export default lalala2;