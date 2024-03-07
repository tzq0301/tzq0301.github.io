export interface Blog {
    time: string,
    url: string,
    title: string,
}

export const blogs: Blog[] = [
    {
        time: "Mar 2024",
        url: "https://zhuanlan.zhihu.com/p/685819561",
        title: "分布式锁服务 Chubby 以及分布式锁实现 Redis、Zookeeper",
    },
    {
        time: "Jan 2024",
        url: "https://zhuanlan.zhihu.com/p/676561818",
        title: "使用 SSE & NATS 实现轻量级的聊天室",
    },
    {
        time: "Dec 2023",
        url: "https://zhuanlan.zhihu.com/p/673212520",
        title: "Raft 的三个子问题",
    },
    {
        time: "Dec 2023",
        url: "https://zhuanlan.zhihu.com/p/672869541",
        title: "Go: Allocation optimization in slog",
    },
    {
        time: "Dec 2023",
        url: "https://zhuanlan.zhihu.com/p/672022693",
        title: "赋能 Local Development：当 Spring Boot 遇上 Testcontainers",
    },
    {
        time: "Nov 2023",
        url: "https://zhuanlan.zhihu.com/p/665557965",
        title: "DieHard 问题 —— 状态机建模 & TLA+形式化验证",
    },
    {
        time: "Nov 2023",
        url: "https://zhuanlan.zhihu.com/p/667007734",
        title: "关于“接口幂等性”的通用性建模",
    },
    {
        time: "Oct 2023",
        url: "https://zhuanlan.zhihu.com/p/662629740",
        title: "关于“全局变量”对程序的上下文造成的全局“污染”",
    },
    {
        time: "Sep 2023",
        url: "https://zhuanlan.zhihu.com/p/655182770",
        title: "Redis 分布式锁 Factory 模式 API 实现",
    },
    {
        time: "Aug 2023",
        url: "https://zhuanlan.zhihu.com/p/649440256",
        title: "处理 ChatGPT 的 API HTTP 流式响应 & 超时控制",
    },
    {
        time: "Aug 2023",
        url: "https://zhuanlan.zhihu.com/p/650602668",
        title: "GORM 使用真实 MySQL 进行 repo 层单元测试",
    },
    {
        time: "Jul 2023",
        url: "https://zhuanlan.zhihu.com/p/642655472",
        title: "Go 阻塞式 select channel 替代长轮询",
    },
    {
        time: "Jul 2023",
        url: "https://zhuanlan.zhihu.com/p/642134590",
        title: "图中给定两个节点，找出两点之间全部路径（非递归方法）",
    },
    {
        time: "Mar 2023",
        url: "https://zhuanlan.zhihu.com/p/613615100",
        title: "自动发布 Maven Package —— 基于 GitHub Actions 与 OSSRH（sonatype）",
    },
    {
        time: "Mar 2023",
        url: "https://zhuanlan.zhihu.com/p/590967429",
        title: "通过 GitHub Actions 完成 Spring Boot 项目的 CI/CD（基于 Docker）",
    },
    {
        time: "Dec 2022",
        url: "https://zhuanlan.zhihu.com/p/591189491",
        title: "什么是微服务动态更新 & 为什么要用 Version Consistency 进行动态更新",
    },
    {
        time: "Aug 2022",
        url: "https://zhuanlan.zhihu.com/p/560385045",
        title: "怎么进行你的代码优化 & 编译器怎么优化你的代码",
    },
    {
        time: "Jul 2022",
        url: "https://zhuanlan.zhihu.com/p/547390956",
        title: "微信小程序应用开发赛 —— 怎么至少不把一个产品做差",
    },
    {
        time: "Mar 2022",
        url: "https://zhuanlan.zhihu.com/p/600540961",
        title: "Spring WebFlux 响应式定制 Redis 对指定数据类型的序列化与反序列化配置（例如 ObjectId、LocalDate）",
    },
]