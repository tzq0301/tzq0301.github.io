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
import Separator from "@/app/components/Separator";

import './page.css';

export default function Home() {
    return (
        <div className={"font-serif flex justify-center items-center bg-zinc-50"}>
            {/*<div className={"w-1/2"}>*/}
            <div className={"w-1/2"} id={'content-container'}>
                <div className={"h-24"}></div>

                <div>
                    <div className={'text-center text-4xl'}>Tong Zhaoqi</div>

                    <div className={'h-4'}></div>

                    <div className={'text-center text-slate-600 text-xs italic'}>Master @ Nanjing University</div>
                </div>

                <div className={'h-16'}></div>

                <div className={'flex flex-col items-center'}>
                    <div>
                        <UrlLink url={'#education'} native={true} underline={false}
                                 fontSize={'text-sm'}>Education</UrlLink>
                        <Separator/>
                        <UrlLink url={'#work-experience'} native={true} underline={false} fontSize={'text-sm'}>Work
                            Experience</UrlLink>
                        <Separator/>
                        <UrlLink url={'#open-source'} native={true} underline={false} fontSize={'text-sm'}>Open Source
                            Contributions</UrlLink>
                    </div>
                    <Br/>
                    <div>
                        <UrlLink url={'#researches'} native={true} underline={false}
                                 fontSize={'text-sm'}>Researches</UrlLink>
                        <Separator/>
                        <UrlLink url={'#blogs'} native={true} underline={false} fontSize={'text-sm'}>Blogs</UrlLink>
                        <Separator/>
                        <UrlLink url={'#projects'} native={true} underline={false}
                                 fontSize={'text-sm'}>Projects</UrlLink>
                        <Separator/>
                        <UrlLink url={'#honors-awards'} native={true} underline={false} fontSize={'text-sm'}>Honors &
                            Awards</UrlLink>
                    </div>
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

                <div id={'education'}>
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

                <div id={'work-experience'}>
                    <div className={'text-2xl'}>Work Experience</div>
                    <Br/>
                    <Br/>
                    <Table>
                        <TableRow
                            left={
                                <div className={'break-all'}>
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
                                    <div>2023.6 ~ 2023.8<Separator/>Chengdu (China)</div>
                                </div>
                            }/>
                        <TableRow
                            left={
                                <div className={'break-all'}>
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
                                    <div>2022.11 ~ 2023.2<Separator/>Hangzhou (China)</div>
                                </div>
                            }/>
                    </Table>
                </div>

                <div className={'h-14'}></div>

                <div id={'open-source'}>
                    <div className={'text-2xl'}>Open Source Contributions</div>
                    <Br/>
                    <Br/>
                    <Table>
                        <TableRow left={<UrlLink url={'https://github.com/dominikbraun/graph'}
                                                 underline={false}>
                            <div className={'break-all'}>dominikbraun/graph</div>
                        </UrlLink>}
                                  right={
                                      <div>
                                          <div>A library for creating <Bold>
                                              <text className={'italic'}>generic graph data structures</text>
                                          </Bold> and modifying, analyzing, and visualizing them (1.4k Stars)
                                          </div>
                                          <Br/>
                                          <ul className={'list-disc ms-4'}>
                                              <li><UrlLink
                                                  url={'https://github.com/dominikbraun/graph/pull/137'}>PR#137</UrlLink>:&nbsp;
                                                  <text>List all paths between two given vertices, implemented by
                                                      dual-stack (which is non-recursive)
                                                  </text>
                                                  <Separator/><UrlLink url={'https://zhuanlan.zhihu.com/p/642134590'}
                                                                       bold={false}>知乎：图中给定两个节点，找出两点之间全部路径（非递归方法）</UrlLink>
                                              </li>
                                              <Br/>
                                              <li><UrlLink
                                                  url={'https://github.com/dominikbraun/graph/pull/86'}>PR#86</UrlLink>,&nbsp;
                                                  <UrlLink
                                                      url={'https://github.com/dominikbraun/graph/pull/140'}>PR#140</UrlLink>:&nbsp;
                                                  <text>修复并优化 GitHub Actions CI workflow、解决 golangci-lint
                                                      版本依赖问题、增加 Go 多版本 CI Matrix Testing
                                                  </text>
                                              </li>
                                          </ul>
                                      </div>
                                  }/>
                        <TableRow left={<UrlLink url={'https://github.com/redis/go-redis'}
                                                 underline={false}>
                            <div className={'break-all'}>redis/go-redis</div>
                        </UrlLink>}
                                  right={
                                      <div>
                                          <Bold>
                                              <text className={'italic'}>Redis Go client</text>
                                          </Bold> (18.2k Stars)
                                          <Br/>
                                          <ul className={'list-disc ms-4'}>
                                              <li>
                                                  <UrlLink
                                                      url={'https://github.com/redis/go-redis/pull/2753'}>PR#2753</UrlLink>:&nbsp;
                                                  <text>
                                                      Support writing args with <text className={'italic'}>the pointer
                                                      type of the simple data types</text> for the redis-protocol writer
                                                  </text>
                                              </li>
                                          </ul>
                                      </div>
                                  }/>
                    </Table>
                </div>

                <div className={'h-14'}></div>

                <div id={'blogs'}>
                    <div className={'text-2xl'}>Blogs <text className={'text-base'}>(selected)</text></div>
                    <Br/>
                    <Br/>
                    <List>
                        <ListItem left={'Mar 2024'} right={<UrlLink url={'https://zhuanlan.zhihu.com/p/685819561'}
                                                                    bold={false}>分布式锁服务 Chubby 以及分布式锁实现 Redis、Zookeeper</UrlLink>}/>
                        <ListItem left={'Jan 2024'} right={<UrlLink url={'https://zhuanlan.zhihu.com/p/676561818'}
                                                                    bold={false}>使用 SSE & NATS 实现轻量级的聊天室</UrlLink>}/>
                        <ListItem left={'Dec 2023'} right={<UrlLink url={'https://zhuanlan.zhihu.com/p/673212520'}
                                                                    bold={false}>Raft 的三个子问题</UrlLink>}/>
                        <ListItem left={'Dec 2023'} right={<UrlLink url={'https://zhuanlan.zhihu.com/p/672869541'}
                                                                    bold={false}>Go: Allocation optimization in
                            slog</UrlLink>}/>
                        <ListItem left={'Dec 2023'} right={<UrlLink url={'https://zhuanlan.zhihu.com/p/672022693'}
                                                                    bold={false}>赋能 Local Development：当 Spring Boot
                            遇上 Testcontainers</UrlLink>}/>
                        <ListItem left={'Nov 2023'} right={<UrlLink url={'https://zhuanlan.zhihu.com/p/665557965'}
                                                                    bold={false}>DieHard 问题 —— 状态机建模 & TLA+
                            形式化验证</UrlLink>}/>
                        <ListItem left={'Nov 2023'} right={<UrlLink url={'https://zhuanlan.zhihu.com/p/667007734'}
                                                                    bold={false}>关于“接口幂等性”的通用性建模</UrlLink>}/>
                        <ListItem left={'Oct 2023'} right={<UrlLink url={'https://zhuanlan.zhihu.com/p/662629740'}
                                                                    bold={false}>关于“全局变量”对程序的上下文造成的全局“污染”</UrlLink>}/>
                        <ListItem left={'Sep 2023'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/655182770'} bold={false}>Redis 分布式锁
                                      Factory 模式 API 实现</UrlLink>}/>
                        <ListItem left={'Aug 2023'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/649440256'} bold={false}>处理
                                      ChatGPT 的 API HTTP 流式响应 & 超时控制</UrlLink>}/>
                        <ListItem left={'Aug 2023'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/650602668'} bold={false}>GORM 使用真实
                                      MySQL 进行 repo 层单元测试</UrlLink>}/>
                        <ListItem left={'Jul 2023'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/642655472'} bold={false}>Go 阻塞式
                                      select channel 替代长轮询</UrlLink>}/>
                        <ListItem left={'Jul 2023'} right={<UrlLink url={'https://zhuanlan.zhihu.com/p/642134590'}
                                                                    bold={false}>图中给定两个节点，找出两点之间全部路径（非递归方法）</UrlLink>}/>
                        <ListItem left={'Mar 2023'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/613615100'} bold={false}>自动发布
                                      Maven Package —— 基于 GitHub Actions 与 OSSRH（sonatype）</UrlLink>}/>
                        <ListItem left={'Mar 2023'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/590967429'} bold={false}>通过
                                      GitHub Actions 完成 Spring Boot 项目的 CI/CD（基于 Docker）</UrlLink>}/>
                        <ListItem left={'Dec 2022'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/591189491'} bold={false}>什么是微服务动态更新
                                      & 为什么要用 Version Consistency 进行动态更新</UrlLink>}/>
                        <ListItem left={'Aug 2022'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/560385045'} bold={false}>怎么进行你的代码优化
                                      & 编译器怎么优化你的代码</UrlLink>}/>
                        <ListItem left={'Jul 2022'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/547390956'} bold={false}>微信小程序应用开发赛
                                      —— 怎么至少不把一个产品做差</UrlLink>}/>
                        <ListItem left={'Mar 2022'}
                                  right={<UrlLink url={'https://zhuanlan.zhihu.com/p/600540961'} bold={false}>Spring
                                      WebFlux 响应式定制 Redis 对指定数据类型的序列化与反序列化配置（例如
                                      ObjectId、LocalDate）</UrlLink>}/>
                    </List>
                </div>

                <div className={'h-14'}></div>

                <div id={'researches'}>
                    <div className={'text-2xl'}>Researches</div>
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

                <div id={'projects'}>
                    <div className={'text-2xl'}>Projects</div>
                    <Br/>
                    <Br/>
                    <List>
                        <ListItem
                            left={'Feb 2023'}
                            right={
                                <div>
                                    <text>通用自适应软件服务编程框架<Separator/>Open SAS (Open Source
                                        Self-Adaptive Software Platform)
                                    </text>
                                    <Separator/><UrlLink
                                    url={'https://github.com/tzq0301/open-sas'}>Code</UrlLink>
                                </div>
                            }/>
                        <ListItem
                            left={'May 2022'}
                            right={
                                <div>
                                    <text>字影&nbsp;·&nbsp;智能创作平台<Separator/>中国软件杯全国二等奖参赛作品</text>
                                    <Separator/><UrlLink url={'https://github.com/tzq0301/a9-backend'}>Backend
                                    Code</UrlLink><Separator/><UrlLink
                                    url={'https://github.com/tzq0301/title-generation-v4'}>AI
                                    Code</UrlLink><Separator/><UrlLink
                                    url={'https://www.bilibili.com/video/BV1KG411b73S'}>演示视频</UrlLink>
                                </div>
                            }/>
                        <ListItem
                            left={'Feb 2022'}
                            right={
                                <div>
                                    基于 Spring Cloud 微服务架构与 Spring WebFlux 响应式 Web
                                    框架的“心理咨询系统”<Separator/><UrlLink
                                    url={'https://github.com/tzq0301/pcs'}>Backend Code</UrlLink>
                                </div>
                            }/>
                    </List>
                </div>

                <div className={'h-14'}></div>

                <div id={'honors-awards'}>
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
