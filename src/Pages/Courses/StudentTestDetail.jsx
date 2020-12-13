import React from "react";
import {Layout, Card, Button, Radio, Statistic, Affix, Anchor} from "antd";
// import {Link} from "react-router-dom";
import Markdown from 'react-remarkable';

const {Content, Footer, Sider} = Layout;
const { Countdown } = Statistic;
const { Link } = Anchor;

export default class StudentTestDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [
                {
                    description: `In a dynamic memory allocation system, we have a list of available blocks:

    Free block No.      Block size（KB）Block base address
    1                           80                          60
    2                           75                         150
    3                           55                         250
    4                           90                         350
                    
    At one moment, a process requires 50KB memory, and the system start from No.1 block and finally allocated No.4 block to that process. We can learn that the system use ______ allocation algorithm.`,
                    score: 50,
                    options: [
                        'first fit',
                        'best fit',
                        'worst fit',
                        'none of the above',
                    ]
                },
                {
                    description: `A file system uses a two-level indexed allocation scheme. If the size of each block is 1KB, and the block address is 4 bytes, then the maximum length of a file this system can support is approximately`,
                    score: 50,
                    options: [
                        '16M',
                        '64M',
                        '128M',
                        '256M',
                    ]
                },
                {
                    description: `A file system uses a two-level indexed allocation scheme. If the size of each block is 1KB, and the block address is 4 bytes, then the maximum length of a file this system can support is approximately`,
                    score: 50,
                    options: [
                        '16M',
                        '64M',
                        '128M',
                        '256M',
                    ]
                }
            ]
        }
    }
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
        const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
        return (
            <Layout style={{height: '100vh'}}>
                <Card>
                    {/* <Affix offsetTop={10}> */}
                        <Card>
                            <Anchor>
                            {this.state.questionList.map((question, j) => {
                                return (
                                    <Link href={`#${j+1}-th-question`} title={`第${j+1}题（分值${question.score}）`}></Link>
                                )
                            })}
                            </Anchor>
                            <Countdown title="剩余时间" value={deadline} onFinish={() => {console.log("[!]")}}></Countdown>
                            <Button type="primary">提交</Button>
                        </Card>
                    {/* </Affix> */}
                    
                    {this.state.questionList.map((question, j) => {
                        return (
                            <Card id={`${j+1}-th-question`} title={<a href={`#${j+1}-th-question`}>{`第${j+1}题（分值${question.score}）`}</a>}>
                                <Markdown source={question.description} />
                                <Radio.Group name="1">
                                    {question.options.map((v, i) => (
                                        <Radio style={radioStyle} value={i}>{`${i}. ${v}`}</Radio>
                                    ))}
                                </Radio.Group>
                            </Card>
                        )
                    })}
                </Card>
            </Layout>
        );
    }

}