'use client';

import UrlLink from "@/app/components/UrlLink";
import Bold from "@/app/components/Bold";
import Br from "@/app/components/Br";
import Paragraph from "@/app/components/Paragraph";
import InlineIcon from "@/app/components/InlineIcon";
import TableRow from "@/app/components/table/TableRow";
import Table from "@/app/components/table/Table";
import {Tooltip} from "antd";
import List from "@/app/components/list/List";
import ListItem from "@/app/components/list/ListItem";
import Underline from "@/app/components/Underline";

export default function Home() {
    return (
        <div className={"font-serif flex justify-center items-center bg-zinc-50"}>
            <div className={"w-1/2"}>
                <div className={"h-24"}></div>

                <div>
                    <div className={'text-center text-4xl'}>Tong Zhaoqi</div>

                    <div className={'h-4'}></div>

                    <div className={'text-center text-slate-600 text-xs italic'}>Master @ Nanjing University</div>
                </div>

                <div className={'h-16'}></div>

                <div>
                    <Paragraph>Hey, I&apos;m <Bold>Tong Zhaoqi</Bold> I&apos;m currently doing research
                        at <UrlLink
                            url={"https://ics.nju.edu.cn/"}>ICS</UrlLink> of <UrlLink
                            url={"https://www.nju.edu.cn/index.htm"}>Nanjing University</UrlLink> for my master degree.
                        I&apos;m interested in <Bold>Software Engineering</Bold> and enjoying coding via
                        C++/Java/Go/Rust.</Paragraph>

                    <Br/>

                    <Paragraph>Mail me at <UrlLink url={"zhaoqi.tong@outlook.com"}
                                                   bold={false}>zhaoqi.tong@outlook.com</UrlLink> or <UrlLink
                        url={"tzq0301@gmail.com"} bold={false}>tzq0301@gmail.com</UrlLink></Paragraph>

                    <div className={'h-3'}></div>

                    <Paragraph>
                        <UrlLink url={'https://github.com/tzq0301'} bold={false}>
                            <InlineIcon src={"/icon/github.svg"} text={"GitHub"}/>
                        </UrlLink>
                        &nbsp;&nbsp;
                        <UrlLink url={'https://www.zhihu.com/people/tong-zhao-qi-52'} bold={false}>
                            <InlineIcon src={"/icon/zhihu.svg"} text={"zhihu"}/>
                        </UrlLink>
                        &nbsp;&nbsp;
                        <UrlLink url={'https://space.bilibili.com/21378920'} bold={false}>
                            <InlineIcon src={"/icon/bilibili.svg"} text={"bilibili"}/>
                        </UrlLink>
                        &nbsp;&nbsp;
                        <UrlLink url={'https://blog.csdn.net/m0_46261993'} bold={false}>
                            <InlineIcon src={"/icon/csdn.svg"} text={"CSDN"}/>
                        </UrlLink>
                    </Paragraph>
                </div>

                <div className={'h-14'}></div>

                <div>
                    <div className={'text-2xl'}>Education</div>
                    <Br/>
                    <Br/>
                    <Table>
                        <TableRow
                            left={
                                <div>
                                    <Bold>Master</Bold>
                                </div>
                            }
                            right={
                                <div>
                                    <div>
                                        <UrlLink url={'https://www.nju.edu.cn/index.htm'}>Nanjing
                                            University</UrlLink>,&nbsp;
                                        <UrlLink url={'https://cs.nju.edu.cn/main.htm'} bold={false}>Computer Science
                                            Department</UrlLink>,&nbsp;
                                        <UrlLink url={'https://ics.nju.edu.cn/'} bold={false}>Institute of Computer
                                            Software</UrlLink>&nbsp;(in Chinese: 南京大学计算机系软件研究所)
                                    </div>
                                    <Br/>
                                    <div>Advisor: <UrlLink url={'https://yiqinnju.github.io/'} bold={false}>Prof. Yi
                                        Qin</UrlLink>,&nbsp;<UrlLink
                                        url={'https://ics.nju.edu.cn/people/xiaoxingma/index.html'} bold={false}>Prof.
                                        Xiaoxing Ma</UrlLink></div>
                                    <Br/>
                                    2023.9 ~ now
                                </div>
                            }/>
                        <TableRow
                            left={
                                <div>
                                    <Bold>B.S.</Bold>
                                </div>
                            }
                            right={
                                <div>
                                    <div>
                                        <UrlLink url={'https://scu.edu.cn/'}>Sichuan University</UrlLink>,&nbsp;
                                        <UrlLink url={'https://sw.scu.edu.cn/'} bold={false}>Collage of Software
                                            Engineering</UrlLink>&nbsp;(in Chinese: 四川大学软件学院)
                                    </div>
                                    <Br/>
                                    2019.9 ~ 2023.6
                                </div>
                            }/>
                    </Table>
                </div>

                <div className={'h-14'}></div>

                <div>
                    <div className={'text-2xl'}>Work Experience</div>
                    <Br/>
                    <Br/>
                    <Table>
                        <TableRow
                            left={
                                <div>
                                    <Bold>Juxue Technology</Bold>&nbsp;(Intern)
                                </div>
                            }
                            right={
                                <div>
                                    <div>Golang 后端研发实习生 & <text className={'text-gray-500'}><Tooltip
                                        title={'原后端正式员工离职后，本人开始负责（1）需求评审（2）团队对接（3）日常编码（4）带实习生一名'}>临时</Tooltip>
                                    </text>后端研发负责人 <span className={'font-bold'}>@</span> AI 爱家事业部
                                    </div>
                                    <Br/>
                                    <div>2023.6 ~ 2023.8</div>
                                </div>
                            }/>
                        <TableRow
                            left={
                                <div>
                                    <UrlLink url={'https://www.bytedance.com/'}
                                             underline={false}>ByteDance</UrlLink>&nbsp;(Intern)
                                </div>
                            }
                            right={
                                <div>
                                    <div>Golang 后端研发实习生 <span
                                        className={'font-bold'}>@</span> 抖音电商平台治理（产品研发和工程架构部）
                                    </div>
                                    <Br/>
                                    <div>2022.11 ~ 2023.2</div>
                                </div>
                            }/>
                    </Table>
                </div>

                <div className={'h-14'}></div>

                <div>
                    <div className={'text-2xl'}>Projects</div>
                    <Br/>
                    <Br/>
                    <List>
                        <ListItem left={'Jan 2021'}
                                  right={
                                      <div>
                                          Liu S*, You Y*, <Bold>Tong Z</Bold>, Zhang L. <UrlLink
                                          url={'https://pubmed.ncbi.nlm.nih.gov/34764986/'}
                                          underline={false}>
                                          Developing
                                          an Embedding, Koopman and Autoencoder Technologies-Based Multi-Omics Time
                                          Series Predictive Model (EKATP) for Systems Biology research.&nbsp;
                                      </UrlLink>Front
                                          Genet. 2021 Oct 26;12:761629. doi: 10.3389/fgene.2021.761629. PMID: 34764986;
                                          PMCID: PMC8576451.
                                      </div>
                                  }/>
                    </List>
                </div>

                <div className={'h-14'}></div>

                <div>
                    <div className={'text-2xl'}>Projects</div>
                    <Br/>
                    <Br/>
                    <List>
                        <ListItem
                            left={'Feb 2023'}
                            right={
                                <div>
                                    <text>通用自适应软件服务编程框架&nbsp;&nbsp;|&nbsp;&nbsp;Open SAS (Open Source
                                        Self-Adaptive Software Platform)
                                    </text>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;<UrlLink
                                    url={'https://github.com/tzq0301/open-sas'}>Code</UrlLink>
                                </div>
                            }/>
                        <ListItem
                            left={'May 2022'}
                            right={
                                <div>
                                    <text>字影&nbsp;·&nbsp;智能创作平台&nbsp;&nbsp;|&nbsp;&nbsp;中国软件杯全国二等奖参赛作品</text>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;<UrlLink url={'https://github.com/tzq0301/a9-backend'}>Backend
                                    Code</UrlLink>&nbsp;&nbsp;|&nbsp;&nbsp;<UrlLink
                                    url={'https://github.com/tzq0301/title-generation-v4'}>AI
                                    Code</UrlLink>&nbsp;&nbsp;|&nbsp;&nbsp;<UrlLink
                                    url={'https://www.bilibili.com/video/BV1KG411b73S'}>演示视频</UrlLink>
                                </div>
                            }/>
                        <ListItem
                            left={'Feb 2022'}
                            right={
                                <div>
                                    基于 Spring Cloud 微服务架构与 Spring WebFlux 响应式 Web
                                    框架的“心理咨询系统”&nbsp;&nbsp;|&nbsp;&nbsp;<UrlLink
                                    url={'https://github.com/tzq0301/pcs'}>Backend Code</UrlLink>
                                </div>
                            }/>
                    </List>
                </div>

                <div className={'h-14'}></div>

                <div>
                    <div className={'text-2xl'}>Honors & Awards</div>
                    <Br/>
                    <Br/>
                    <List>
                        <ListItem left={'Nov 2022'} right={<Bold>四川<Underline>省优秀毕业生</Underline></Bold>}/>
                        <ListItem left={'Nov 2022'} right={<Bold>四川大学优秀毕业生</Bold>}/>
                        <ListItem left={'Nov 2022'} right={'四川大学综合一等奖学金'}/>
                        <ListItem left={'Aug 2022'} right={<Bold>第十一届“<Underline>中国软件杯</Underline>”大学生软件设计大赛
                            · <Underline>全国二等奖</Underline></Bold>}/>
                        <ListItem left={'Aug 2022'}
                                  right={<Bold>2022 年微信小程序应用开发赛 · <Underline>全国三等奖</Underline></Bold>}/>
                        <ListItem left={'Aug 2022'}
                                  right={'NUS Summer Workshop, Cloud Computing, Best Implementation'}/>
                        <ListItem left={'May 2022'} right={'四川省首届高校志愿服务项目大赛实践项目赛道铜奖'}/>
                        <ListItem left={'Dec 2021'} right={
                            <Bold>四川大学大学生创新创业训练计划<Underline>省级</Underline>项目<Underline>优秀结题</Underline></Bold>}/>
                        <ListItem left={'Oct 2021'} right={'四川大学综合三等奖学金'}/>
                        <ListItem left={'Oct 2021'} right={'四川大学优秀学生'}/>
                        <ListItem left={'Jun 2021'} right={'第十二届蓝桥杯软件类省赛二等奖'}/>
                        <ListItem left={'Jun 2021'} right={'四川大学校级篮球赛第七名'}/>
                        <ListItem left={'Dec 2020'} right={'四川大学网页设计大赛第四名（三等奖）'}/>
                        <ListItem left={'Oct 2020'} right={'四川大学综合二等奖学金'}/>
                        <ListItem left={'Oct 2020'} right={'四川大学优秀学生'}/>
                    </List>
                </div>

                <div className={'h-32'}></div>
            </div>
        </div>
    )
}
