import type { LegalPackMap } from './legal-types';
import { LEGAL_PACK_EN } from './legal-pack-en-eu';

export const LEGAL_PACK_ZH: LegalPackMap = {
  'terms-of-service': {
    title: '服务条款',
    subtitle:
      '规范访问与使用 TikProfilesViewer.com 上 Tik Profiles Viewer 的具有法律约束力的条款、规则与条件。',
    summary:
      '访问或使用 Tik Profiles Viewer 即表示您同意本服务条款。我们的服务允许用户在遵守适用法律的前提下，出于个人非商业目的查看公开创作者主页并下载公开媒体内容。',
    sections: [
      {
        heading: '1. 条款的接受',
        paragraphs: [
          '欢迎使用通过 TikProfilesViewer.com 访问的 Tik Profiles Viewer（本网站、本服务、我们）。本服务条款构成您（用户、您）与 Tik Profiles Viewer 运营者之间具有法律约束力的协议。',
          '通过访问、浏览或使用我们网站的任何功能，您明确确认已阅读、理解并同意受本服务条款以及我们的隐私政策、Cookie 政策、可接受使用政策和版权政策的约束。如果您不同意此处规定的所有条款，请立即停止访问和使用本服务。',
        ],
      },
      {
        heading: '2. 服务描述',
        paragraphs: [
          'Tik Profiles Viewer 是一个基于网络的教育与实用工具平台，旨在让访问者查看来自 TikTok 社交媒体网络的公开可用信息。网站提供的功能包括：',
        ],
        list: {
          items: [
            { text: '查看公开可用的创作者头像、昵称、简介、粉丝数、关注数及总获赞数据。' },
            { text: '无需登录账号即可流畅在线播放公开发布的短视频内容。' },
            { text: '出于个人、离线和归档目的，保存原始高清视频文件（MP4）和音频音轨（MP3）。' },
            { text: '使用创作者工具，例如互动率估算器和视频数据计算器。' },
          ],
        },
        footnote:
          '我们的服务仅索引和代理开放互联网上已经公开可见的数据。我们不提供访问私密账号、已删除视频、受地域限制媒体或位于账号验证墙之后的内容。',
      },
      {
        heading: '3. 允许的非商业用途',
        paragraphs: [
          '您被授予有限的、可撤销的、非排他性的、不可转让的许可，仅可出于个人、非商业和合法的目的访问与使用本网站。您同意不会转售、重新打包、重新分发、广播或商业利用通过我们服务获取的任何媒体或数据。',
        ],
      },
      {
        heading: '4. 用户承诺与禁止行为',
        paragraphs: ['使用 Tik Profiles Viewer 时，您明确保证并同意不会：'],
        list: {
          items: [
            { text: '将本服务用于任何非法、欺诈、诽谤、骚扰或恶意目的。' },
            { text: '试图绕过、停用、破坏或威胁本网站的技术基础设施、速率限制或安全控制措施。' },
            { text: '部署破坏服务器性能或对我们基础设施施加不合理负载的自动抓取工具、机器人或高并发请求引擎。' },
            { text: '未经原始内容所有者明确授权，出于商业盈利目的下载或分发受版权保护的媒体。' },
            { text: '冒充任何人或实体，或虚假声称与 TikTok、字节跳动或 Tik Profiles Viewer 有任何官方关联。' },
          ],
        },
      },
      {
        heading: '5. 知识产权与所有权',
        paragraphs: [
          'Tik Profiles Viewer 创建的所有商标、标识、品牌名称、软件代码、网站排版、设计、文本和图形均为 Tik Profiles Viewer 的独家知识产权。',
          '通过网站展示或播放的所有 TikTok 商标、标识、录音和创作者视频均属于其各自创作者和字节跳动所有。我们不对第三方发布的内容主张任何专有权利。',
        ],
      },
      {
        heading: '6. 第三方链接、API 与外部基础设施',
        paragraphs: [
          '本服务可能从第三方网络和 API 检索信息。我们对第三方平台的内容、在线状态、可用性、隐私政策或做法没有直接控制权。您确认，对于因与外部第三方服务互动而引起的任何损失，我们概不负责。',
        ],
      },
      {
        heading: '7. 免责声明',
        paragraphs: [
          '本服务按现状和现有基础提供，不提供任何形式的明示、暗示或法定保证。在适用法律允许的最大范围内，我们不承担任何明示或暗示的担保，包括但不限于适销性、特定用途适用性及不侵权的担保。',
        ],
      },
      {
        heading: '8. 责任限制',
        paragraphs: [
          '在任何情况下，Tik Profiles Viewer 及其运营团队均不对因使用本服务而引起的任何间接、附带、特殊、惩罚性或后果性损害承担责任，包括利润损失、数据丢失或系统损坏。',
        ],
      },
      {
        heading: '9. 服务与条款的修改',
        paragraphs: [
          '我们保留自行决定修改、暂停或终止本服务任何方面的权利，恕不另行通知。我们可能会定期更新本服务条款以反映法律或功能变化。继续使用本网站即视为接受更新后的条款。',
        ],
      },
      {
        heading: '10. 管辖法律与可分割性',
        paragraphs: [
          '本服务条款应受通用的国际电子商务与数字服务惯例管辖。如任何条款被裁定无效，其余条款仍保持完全效力。',
        ],
      },
    ],
  },
  'privacy-policy': {
    title: '隐私政策',
    subtitle:
      'Tik Profiles Viewer 如何保护您的隐私、处理服务器临时日志，并以通俗语言说明广告 Cookie 机制。',
    summary:
      'Tik Profiles Viewer 不要求您注册、登录或提供个人详细信息。我们仅处理维护网站安全与稳定所必需的短期技术日志，您可以完全控制自己的 Cookie 和广告偏好。',
    sections: [
      {
        heading: '1. 概述',
        paragraphs: [
          '欢迎访问 TikProfilesViewer.com 上的 Tik Profiles Viewer。我们建立该工具是为了让任何人无需创建账号即可查看公开 TikTok 主页并下载公开媒体。',
          '本政策解释了您访问我们网站时处理的技术信息、Cookie 的工作方式以及您如何管理自己的隐私选项。',
        ],
      },
      {
        heading: '2. 我们绝不收集的信息',
        paragraphs: ['我们不要求也不存储个人账号信息，特别强调我们绝不收集：'],
        list: {
          items: [
            { label: '个人身份信息：', text: ' 我们不要求提供姓名、住址或手机号码。' },
            { label: 'TikTok 登录凭据：', text: ' 我们绝不索取您的 TikTok 账号、密码或私密授权令牌。' },
            { label: '个人搜索画像：', text: ' 我们不会针对您搜索的创作者或下载的文件建立个人档案。' },
          ],
        },
      },
      {
        heading: '3. 临时服务器日志与联系邮件',
        paragraphs: [
          '与绝大多数网站一样，服务器会自动生成短期技术日志以防止恶意滥用和自动化刷量，这些日志可能包含：',
        ],
        list: {
          items: [
            { text: '您的 IP 地址（用于频率安全限制，定期自动轮转删除）。' },
            { text: '您的浏览器类型、操作系统设备类型及屏幕尺寸。' },
            { text: '请求的页面路径、请求时间与 HTTP 状态代码。' },
          ],
        },
        footnote:
          '如果您直接通过电子邮件向我们发送支持或移除请求，我们仅使用您的邮箱地址和邮件内容来回复和处理该事项。',
      },
      {
        heading: '4. Cookie 与浏览器本地存储',
        paragraphs: [
          '我们在您的设备上使用浏览器 LocalStorage 来记录简单的界面偏好（例如您选择的显示语言或倒计时设置），这些数据完全保存在您的本地浏览器中。',
        ],
      },
      {
        heading: '5. Google AdSense 与广告 Cookie',
        paragraphs: [
          '为了让工具对所有人保持免费，我们可能会通过 Google AdSense 及合规第三方广告合作伙伴展示广告：',
        ],
        list: {
          items: [
            { text: '包括 Google 在内的第三方供应商会使用 Cookie 根据您对本网站或其他网站的访问历史投放广告。' },
            { text: '您可以随时通过 Google 广告设置（https://adssettings.google.com）退出个性化广告。' },
            { text: '您也可以通过访问 www.aboutads.info 管理第三方供应商的广告 Cookie。' },
          ],
        },
      },
      {
        heading: '6. 第三方媒体网络',
        paragraphs: [
          '当您观看视频或保存文件时，浏览器会直接从第三方的公开内容分发网络（CDN）加载流媒体文件，这些外部服务器在其自身的隐私政策下运行。',
        ],
      },
      {
        heading: '7. 数据保留与您的隐私权利',
        paragraphs: [
          '我们仅在保障系统安全所必需的期限内保留临时日志。您可以随时在浏览器中清除 Cookie 或本地缓存数据，也可以联系我们删除支持邮件记录。',
        ],
      },
      {
        heading: '8. 未成年人保护',
        paragraphs: [
          '本网站面向普通大众用户，并非针对 13 岁以下儿童设计。我们不会故意收集 13 岁以下儿童的个人信息。',
        ],
      },
      {
        heading: '9. 运营团队信息与政策更新',
        paragraphs: [
          '当我们的工具功能或合规要求更新时，我们可能会修订本隐私政策。最新版本将始终公布于本页面。',
        ],
        callout: [
          { label: '网站运营方', value: 'Tik Profiles Viewer 团队' },
          { label: '官方联系邮箱', value: 'legal@tikprofilesviewer.com', mailto: 'legal@tikprofilesviewer.com' },
          { label: '生效日期', value: '2026年11月' },
        ],
      },
    ],
  },
  'cookie-policy': {
    title: 'Cookie 政策',
    subtitle:
      '关于 TikProfilesViewer.com 上 Cookie 与浏览器本地存储如何运作以及如何控制它们的清晰说明。',
    summary:
      'Tik Profiles Viewer 使用基础浏览器存储来记住您的偏好并维护网站安全。若页面开启了广告展示，Google AdSense 等合作伙伴也可能根据您的浏览器与授权设置使用 Cookie。',
    sections: [
      {
        heading: '1. 什么是 Cookie 和本地存储？',
        paragraphs: [
          'Cookie 是网站在您访问页面时保存在手机或电脑上的小型文本文件，用于记住您的偏好并协助安全防护。',
          '现代浏览器还提供 LocalStorage（本地存储）技术，它直接在浏览器内部保存语言选择或计数器参数，无需注册账号即可保持状态。',
        ],
      },
      {
        heading: '2. 本站使用的存储分类',
        paragraphs: ['下表展示了各类别的用途和保存期限：'],
        table: {
          headers: ['类别', '用途', '保留期'],
          rows: [
            ['严格必要项', '维持页面正常路由导航与基础安全防护。', '会话期间'],
            ['偏好设置（LocalStorage）', '在您的本地设备上记录所选语言与倒计时秒数。', '直到手动清除'],
            ['技术分析', '利用汇总流量信息测量页面加载速度并修复报错。', '最长 12 个月'],
            ['广告合作（Google AdSense）', '协助合作伙伴展示广告、限制重复展示并统计有效点击。', '按合作方规则'],
          ],
        },
      },
      {
        heading: '3. Google AdSense 广告偏好选择',
        paragraphs: [
          '您可以通过访问 Google 广告设置随时关闭个性化广告投放，也可以通过 www.aboutads.info 管理第三方网络广告偏好。',
        ],
      },
      {
        heading: '4. 如何在浏览器中管理 Cookie',
        paragraphs: ['您可以随时通过浏览器设置阻止或删除 Cookie：'],
        list: {
          items: [
            { label: 'Google Chrome:', text: ' 设置 > 隐私和安全 > 第三方 Cookie' },
            { label: 'Apple Safari:', text: ' 设置或偏好设置 > 隐私 > 管理网站数据' },
            { label: 'Mozilla Firefox:', text: ' 设置 > 隐私与安全 > Cookie 和网站数据' },
            { label: 'Microsoft Edge:', text: ' 设置 > Cookie 和网站权限' },
          ],
        },
      },
      {
        heading: '5. 政策更新',
        paragraphs: [
          '当浏览器环境或站点工具发生变化时，我们可能会更新本政策。请定期查看本页面的最新信息。',
        ],
      },
    ],
  },
  disclaimer: {
    title: '一般免责声明',
    subtitle:
      '关于信息准确性、指标估算及第三方平台限制的重要法律说明。',
    summary:
      'Tik Profiles Viewer 上显示的所有主页资料、粉丝数量和视频数据均从公开接口实时抓取，仅供参考之用。我们无法保证数据的绝对即时性或不间断可用性。',
    sections: [
      {
        heading: '1. 仅供参考目的',
        paragraphs: [
          'TikProfilesViewer.com 提供的所有信息与实用工具仅供一般参考、教育研究和个人离线归档使用。',
          '本网站上的任何内容均不构成专业的商业营销咨询、投资建议或对创作者吸金能力的法律保证。',
        ],
      },
      {
        heading: '2. 公开数据的准确性与时效性',
        paragraphs: [
          '网站展示的粉丝数、获赞总量及视频播放量来源于公开网络接口。由于社交网络数据持续波动且存在缓存延迟：',
        ],
        list: {
          items: [
            { text: '统计数据有时可能与官方移动应用内的实时毫秒级计数存在轻微四舍五入或延迟。' },
            { text: '近期更改隐私设置或被平台限制的账号可能会返回空白或不可用状态。' },
            { text: '互动率计算器和收益估算值属于基于行业指标的数学测算，并非经审计的财务记录。' },
          ],
        },
      },
      {
        heading: '3. 独立性与无从属关系',
        paragraphs: [
          'Tik Profiles Viewer 是一个独立的网络工具，与 TikTok、字节跳动（ByteDance Ltd.）或其任何子公司无任何从属、授权或官方关联。',
          'TikTok 官方网站为 www.tiktok.com。名称 TikTok 以及相关标识均为其各自所有者的注册商标。',
        ],
      },
      {
        heading: '4. 第三方内容与版权责任',
        paragraphs: [
          'Tik Profiles Viewer 不拥有、不制作也不审查第三方视频、图片或配乐。媒体的知识产权属于原始创作者，使用者须自行遵守当地适用的版权法规。',
        ],
      },
      {
        heading: '5. 自行承担风险条款',
        paragraphs: [
          '您明确理解并同意，使用 Tik Profiles Viewer 的风险由您自行承担。本服务按现状提供，不提供任何无故障或不中断的承诺。',
        ],
      },
    ],
  },
  'legal-notice': {
    title: '法律声明（Impressum）',
    subtitle:
      'TikProfilesViewer.com 的法定服务提供商标识、编辑责任与官方联络渠道。',
    summary:
      'Tik Profiles Viewer 的官方法律声明和服务提供商标识，说明平台所有权、技术托管架构与处理渠道。',
    sections: [
      {
        heading: '1. 服务提供商信息',
        paragraphs: [
          '根据国际电子商务和数字服务披露规范提供的信息如下：',
        ],
        callout: [
          { label: '服务名称', value: 'Tik Profiles Viewer' },
          { label: '官方网址', value: 'https://tikprofilesviewer.com', href: 'https://tikprofilesviewer.com' },
          { label: '服务性质', value: '用于查看公开社交媒体信息与视频的免费在线实用工具与匿名浏览器。' },
          { label: '客服联络邮箱', value: 'support@tikprofilesviewer.com', mailto: 'support@tikprofilesviewer.com' },
          { label: '法律与 DMCA 事务邮箱', value: 'legal@tikprofilesviewer.com', mailto: 'legal@tikprofilesviewer.com' },
        ],
      },
      {
        heading: '2. 技术托管与网络基础设施',
        paragraphs: [
          'Tik Profiles Viewer 部署在全球分布式的云基础设施和边缘内容分发网络（CDN）上，服务器托管于经过 ISO/IEC 27001 认证的数据中心。',
        ],
      },
      {
        heading: '3. 编辑与内容责任',
        paragraphs: [
          '作为自动化技术索引和代理工具，Tik Profiles Viewer 不创建、不修改也不编辑第三方视频或个人简介。所有展示内容均在响应用户查询时直接从公开分发网络即时拉取。',
        ],
      },
      {
        heading: '4. 争议解决与联系途径',
        paragraphs: [
          '我们致力于及时处理任何合规关注或版权问题，请通过对应邮箱直接联络：',
        ],
        list: {
          items: [
            { label: '常规咨询：', text: ' support@tikprofilesviewer.com' },
            { label: '版权与 DMCA 下架通知：', text: ' legal@tikprofilesviewer.com' },
            { label: '内容排除申请：', text: ' 通过内容移除政策渠道提交。' },
          ],
        },
      },
    ],
  },
  'copyright-policy': {
    title: '版权与 DMCA 政策',
    subtitle:
      '我们的知识产权准则、对创作者权益的尊重以及提交侵权通知的正规处理程序。',
    summary:
      'Tik Profiles Viewer 尊重创作者的知识产权。我们不在自己的服务器上永久存储视频文件。如果您是版权所有人并希望将内容从我们的搜索索引中排除，请遵循以下流程。',
    sections: [
      {
        heading: '1. 原则声明',
        paragraphs: [
          'Tik Profiles Viewer（我们）严格尊重全球内容创作者、艺术家和版权所有人的知识产权，并遵循美国数字千年版权法（DMCA 17 U.S.C. 512）及国际准则。',
        ],
      },
      {
        heading: '2. 服务技术特性（无文件存储）',
        paragraphs: ['了解我们的版权框架时，请注意以下技术架构：'],
        list: {
          items: [
            { text: 'Tik Profiles Viewer 作为自动化索引、客户端播放与公开代理工具运行。' },
            { text: '我们不在自有服务器上维护永久文件存储、媒体库或视频数据库。' },
            { text: '所有预览或下载的媒体均来自原作者公开发布的第三方内容分发网络（CDN）。' },
            { text: '当视频在原平台上被作者设为私密或删除后，缓存更新后在我们网站上也会自然失效。' },
          ],
        },
      },
      {
        heading: '3. 提交正式 DMCA 下架通知的要求',
        paragraphs: [
          '如果您认为本站索引的内容侵犯了您的合法权益，请向 legal@tikprofilesviewer.com 提交书面通知，必须包含以下完整内容：',
        ],
        list: {
          ordered: true,
          items: [
            { label: '签名：', text: ' 经授权代表版权所有人的实体或电子签名。' },
            { label: '权利证明：', text: ' 明确指出被侵权的受保护作品描述。' },
            { label: '侵权材料链接：', text: ' 网站上或 TikTok 上的具体完整 URL，以便我们技术团队定位。' },
            { label: '联系方式：', text: ' 真实姓名、实体地址、电话号码及官方电子邮件。' },
            { label: '善意声明：', text: ' 声明您确信争议使用未经版权人或法律授权。' },
            { label: '真实性保证：', text: ' 保证通知信息准确无误，如有伪证愿受相应法律处罚。' },
          ],
        },
      },
      {
        heading: '4. 处理时间与措施',
        paragraphs: [
          '合规团队通常在 24 至 48 个工作小时内完成审核，核实后将屏蔽指定 URL 并向通知方发送书面确认。',
        ],
      },
      {
        heading: '5. 版权事务联络',
        paragraphs: ['请将所有正式版权通知发送至指定联系人：'],
        callout: [
          { label: '指定联络人', value: '版权与知识产权合规官' },
          { label: '电子邮箱', value: 'legal@tikprofilesviewer.com', mailto: 'legal@tikprofilesviewer.com' },
          { label: '邮件主题要求', value: '[DMCA Notice] - Copyright Claim - <Title/URL>', isCode: true },
        ],
      },
    ],
  },
  'tiktok-independence-disclaimer': {
    title: 'TikTok 独立声明',
    subtitle:
      '明确声明我们自主运营的平台属性，与字节跳动或 TikTok 无任何公司从属或合作关系。',
    summary:
      'Tik Profiles Viewer 是一个完全独立的网络工具。我们并非由 TikTok Inc.、ByteDance Ltd. 或其任何关联公司拥有、运营、赞助、授权或挂钩。',
    sections: [
      {
        heading: '1. 正式独立性声明',
        paragraphs: [
          'Tik Profiles Viewer（TikProfilesViewer.com）是由独立开发者团队构建并维护的网络公用服务。',
          '我们明确重申：本网站、底层代码和品牌运营均未与 TikTok Inc. 或字节跳动（ByteDance Ltd.）建立任何官方合作关系。',
        ],
      },
      {
        heading: '2. 商标与品牌资产',
        paragraphs: [
          '字标“TikTok”、音符图形及相关视觉设计均为字节跳动公司专有注册商标。',
          '本网站使用“TikTok”一词纯属指示性合理使用，仅为了真实说明本工具用于展示哪个公开平台的公开资料，绝不代表任何品牌赞助或商业许可。',
        ],
      },
      {
        heading: '3. 官方通道说明',
        paragraphs: [
          '如需获取官方客服、广告账户开通或下载官方移动应用，请直接前往官方平台：',
        ],
        list: {
          items: [
            { label: '官方网站：', text: ' https://www.tiktok.com' },
            { label: '官方新闻中心：', text: ' https://newsroom.tiktok.com' },
            { label: '官方帮助中心：', text: ' https://support.tiktok.com' },
          ],
        },
      },
      {
        heading: '4. 用户认知确认',
        paragraphs: [
          '使用本网站即代表您充分理解您在使用一个独立的第三方网络工具。如有任何疑问，请联系 legal@tikprofilesviewer.com。',
        ],
      },
    ],
  },
  'public-content-policy': {
    title: '公开内容政策',
    subtitle:
      'Tik Profiles Viewer 如何识别、读取并仅展示公开社交媒体数据而不绕过任何隐私限制。',
    summary:
      'Tik Profiles Viewer 严格仅与创作者选择公开在开放互联网上的内容进行交互。我们绝不破译私密账号、年龄门槛或数字安全防护。',
    sections: [
      {
        heading: '1. 公共领域可访问性原则',
        paragraphs: [
          'Tik Profiles Viewer 的底层架构建立在互联网开放访问的基础之上。当创作者将账号设为“公开”并发布视频和简介时，这些内容即可在开放网络上被全球浏览器直接读取。',
        ],
      },
      {
        heading: '2. 内容访问的技术界限',
        paragraphs: ['我们坚持严格不可逾越的技术边界：'],
        list: {
          items: [
            { label: '私密账号：', text: ' 如果创作者将账号设为私密，系统绝不会尝试访问、解密或呈现其媒体。' },
            { label: '已删除内容：', text: ' 一旦作者在原平台删除视频，缓存更新后该视频在我们网站也将无法解析。' },
            { label: '仅限好友内容：', text: ' 我们无法访问私信或仅对互关好友可见的内容。' },
            { label: '禁止破解：', text: ' 我们绝不绕过或干扰数字版权保护（DRM）或访问令牌。' },
          ],
        },
      },
      {
        heading: '3. 尊重创作者的隐私权选择',
        paragraphs: [
          '如果您是创作者并希望阻止您的公开内容出现在我们的网页索引中，您有两种简便途径：',
        ],
        list: {
          ordered: true,
          items: [
            { text: '在官方 TikTok 应用内将账号设为“私密”，这会立即阻止我们的工具抓取任何数据。' },
            { text: '根据我们的“内容移除政策”提交排除申请，将您的账号添加至内部屏蔽清单。' },
          ],
        },
      },
      {
        heading: '4. 政策咨询渠道',
        paragraphs: [
          '关于我们对公开数据的处理或技术抓取方式如有疑问，请咨询 legal@tikprofilesviewer.com。',
        ],
      },
    ],
  },
  'content-removal-policy': {
    title: '内容审核与移除政策',
    subtitle:
      '为内容创作者、版权所有人和个人提供明确、透明且平等的申请主页排除与内容下架程序。',
    summary:
      '我们为创作者和个人提供清晰透明的通道，支持申请将其主页、视频或个人信息从 Tik Profiles Viewer 的搜索结果与代理索引中排除。',
    sections: [
      {
        heading: '1. 公平数字移除承诺',
        paragraphs: [
          '我们相信每位创作者都应拥有对自己网络形象展示的控制机制。虽然我们仅索引互联网上的公开数据，但我们充分尊重正当的排除与下架诉求。',
        ],
      },
      {
        heading: '2. 正当的申请理由',
        paragraphs: ['我们基于以下正当理由处理移除诉求：'],
        list: {
          items: [
            { label: '主页所有者申请排除：', text: ' 如果您是公开 TikTok 账号的所有者，且不希望主页可在本站被搜索。' },
            { label: '侵犯知识产权与版权：', text: ' 版权人根据 DMCA 政策提出的正当侵权主张。' },
            { label: '隐私与安全保护：', text: ' 涉及未成年人、非自愿公开、无意泄露的住址、电话等隐私敏感数据。' },
            { label: '法院裁定与监管指令：', text: ' 具有管辖权的法院或主管监管部门出具的正式命令。' },
          ],
        },
      },
      {
        heading: '3. 如何提交申请',
        paragraphs: [
          '请将以下详细资料发送至 legal@tikprofilesviewer.com：',
        ],
        list: {
          ordered: true,
          items: [
            { label: 'TikTok 用户名或链接：', text: ' （例如 @yourusername 或指定视频 URL）。' },
            { label: '所有权核验依据：', text: ' 能够证明您管理该账号的证据（如用简介中展示的邮箱发信，或在简介中临时放置核验验证码）。' },
            { label: '申请原因：', text: ' 简要说明诉求性质（个人隐私保护、主页屏蔽等）。' },
            { label: '联系方式：', text: ' 真实姓名与有效联络邮箱。' },
          ],
        },
      },
      {
        heading: '4. 处理时限',
        paragraphs: [
          '合规团队在 24 至 48 个工作小时内完成审核。核准后，该用户名将加入系统黑名单，之后在网站上搜索将返回不可用状态。',
        ],
      },
      {
        heading: '5. 关键技术说明',
        paragraphs: [
          '从本站排除仅意味着停止在我们网站展示，并不代表在 TikTok 官方应用或其他网络站点上删除。若需彻底删除视频，请直接在 TikTok 原平台上操作。',
        ],
      },
    ],
  },
  'acceptable-use-policy': {
    title: '可接受使用政策',
    subtitle:
      '所有访问 TikProfilesViewer.com 的用户与网络连接必须遵守的行为守则、伦理标准及禁止技术行为。',
    summary:
      'Tik Profiles Viewer 旨在提供和平、尊重和合法的公开社交媒体浏览。我们严禁网络欺凌、跟踪、自动化恶意爬虫、分布式拒绝服务（DDoS）及恶意活动。',
    sections: [
      {
        heading: '1. 目的与适用范围',
        paragraphs: [
          '本可接受使用政策（AUP）适用于与 Tik Profiles Viewer 的所有用户交互与自动化请求。违规行为可能导致 IP 被防火墙即时封禁并移交执法机关。',
        ],
      },
      {
        heading: '2. 禁止的个人行为',
        paragraphs: ['使用本服务时，您明确同意绝不从事以下活动：'],
        list: {
          items: [
            { label: '网络欺凌与跟踪：', text: ' 利用本查看器跟踪、恐吓、骚扰或曝光任何个人或创作者隐私。' },
            { label: '冒充与欺诈：', text: ' 冒充他人或品牌，虚假声称已获得授权代表公众人物。' },
            { label: '散布仇恨言论：', text: ' 下载并重新分发煽动针对特定群体暴力或歧视的内容。' },
            { label: '侵害未成年人：', text: ' 搜索或分发任何涉及侵害未成年人权益的内容，对此零容忍并立即报送国际执法部门。' },
          ],
        },
      },
      {
        heading: '3. 禁止的技术与基础设施滥用',
        paragraphs: ['为维护所有用户的稳定与高速访问，您同意不会：'],
        list: {
          items: [
            { label: '高频恶意爬取：', text: ' 未经书面许可，部署无头浏览器、机器人或自动化爬虫过度抓取数据。' },
            { label: '拒绝服务攻击（DDoS）：', text: ' 恶意泛洪服务器或实施压测以导致云端服务瘫痪。' },
            { label: '扫描与漏洞探测：', text: ' 探测、扫描系统漏洞或尝试破坏身份安全控制机制。' },
            { label: '逆向工程：', text: ' 反编译或尝试提取后端代理路由的专有核心代码。' },
            { label: '广告作弊流量：', text: ' 人工或自动化制造虚假点击或模拟展示欺诈流量。' },
          ],
        },
      },
      {
        heading: '4. 监控与违规处置',
        paragraphs: [
          '我们采用 Web 应用防火墙（WAF）和异常检测算法监控流量，并保留随时封禁违规 IP 和 ASN 的权利。',
        ],
      },
      {
        heading: '5. 举报滥用',
        paragraphs: [
          '如果您发现违反本政策的行为，请立即致信 legal@tikprofilesviewer.com。',
        ],
      },
    ],
  },
  'security-policy': {
    title: '安全政策与数据保护',
    subtitle:
      '为保护我们的网络平台及广大用户而实施的技术标准、传输加密协议与管理机制。',
    summary:
      'Tik Profiles Viewer 优先保障用户安全与系统稳定性。我们采用行业标准 HTTPS/TLS 加密传输、云端 DDoS 防护及持续漏洞管理，打造安全的网络环境。',
    sections: [
      {
        heading: '1. 安全概述',
        paragraphs: [
          '我们深知网络安全对于运营可靠在线工具至关重要。我们的安全策略秉持深度防御原则，涵盖传输层高强度加密、网络边界防御与严格的零个人隐私存储设计。',
        ],
      },
      {
        heading: '2. 传输层加密（HTTPS/TLS）',
        paragraphs: [
          '您的浏览器与我们应用之间的所有网络通信均通过现代 TLS 1.3 / TLS 1.2 加密，并配置严格的 HSTS（HTTP 严格传输安全），有效防范中间人监听与网络篡改。',
        ],
      },
      {
        heading: '3. 云边缘防护与 DDoS 缓解',
        paragraphs: ['我们的应用受到企业级云安全边缘防护的守护，包括：'],
        list: {
          items: [
            { label: '分布式拒绝服务（DDoS）抵御：', text: ' 在全球边缘节点实时分析并化解大流量拥塞攻击。' },
            { label: 'Web 应用防火墙（WAF）：', text: ' 拦截跨站脚本（XSS）、SQL 注入等异常攻击载荷。' },
            { label: '速率限制与机器人管理：', text: ' 限制自动化高频调用，防止后端计算节点过载。' },
          ],
        },
      },
      {
        heading: '4. 最小化攻击面与零个人数据存储',
        paragraphs: [
          '最安全的保护方式是根本不保留。我们在架构设计上不维护任何用户登录数据库，不存储密码或支付凭据，偏好设置仅保留在您的本地设备中。',
        ],
      },
      {
        heading: '5. 持续漏洞管理与更新',
        paragraphs: [
          '我们的技术架构基于现代 Next.js 与 Node.js，并在持续集成（CI）阶段接入自动化漏洞扫描，定期打补丁以应对潜在的安全隐患。',
        ],
      },
      {
        heading: '6. 负责任的安全漏洞披露',
        paragraphs: [
          '我们欢迎安全研究人员提供建设性反馈。若发现潜在安全缺陷，请附带复现步骤并发送邮件至 legal@tikprofilesviewer.com（邮件标题标明 [Security Vulnerability Report]），在给予充足修复时间前请勿向公众公开。',
        ],
      },
    ],
  },
  'service-availability-policy': {
    title: '服务可用性政策',
    subtitle:
      '关于技术在线时间目标、计划内维护窗口以及影响可用性的外部依赖因素说明。',
    summary:
      '我们致力于提供全天候可靠服务。然而，由于本工具依赖外部公开网络节点，可能会因不可控的第三方变动产生短暂服务中断。',
    sections: [
      {
        heading: '1. 可用性目标',
        paragraphs: [
          '我们的工程团队依托全球分布式的 CDN 与容器化架构，力争全年 365 天保持高可用性。作为一项完全免费的公用工具，我们不提供附带经济赔偿的商业服务等级协议（SLA）。',
        ],
      },
      {
        heading: '2. 外部依赖与第三方平台限制',
        paragraphs: [
          '与自产数据的闭环系统不同，Tik Profiles Viewer 依赖于与外部公开网络节点的连接，因此可用性可能受到以下外部因素的影响：',
        ],
        list: {
          items: [
            { label: '原平台架构变动：', text: ' 当 TikTok 修改公开网页结构、请求头或视频编码时，可能需要技术人员部署更新方可恢复解析。' },
            { label: '第三方临时限流：', text: ' 在全球高并发时段，原平台可能对特定 IP 网段实施短暂限流。' },
            { label: '区域版权限制：', text: ' 某些特定视频由于地区版权或监管要求在部分国家可能受到限制。' },
          ],
        },
      },
      {
        heading: '3. 计划内维护与系统升级',
        paragraphs: [
          '为进行系统升级和性能调优，我们会定期执行滚动部署维护，通常选在低峰时段进行，以尽可能消除明显的停机时间。',
        ],
      },
      {
        heading: '4. 不可抗力条款',
        paragraphs: [
          '对于因地震、战争、网络骨干海缆中断、大面积电力中断或主要云厂商大范围故障等不可控事件导致的服务延迟，我们不承担责任。',
        ],
      },
      {
        heading: '5. 故障排查与技术支持',
        paragraphs: [
          '若您遇到主页无法解析或下载失败：请首先核实创作者用户名拼写及账号是否为公开状态，并稍候重试。若问题依然存在，请联系 support@tikprofilesviewer.com。',
        ],
      },
    ],
  },
};

export const LEGAL_PACK_PT: LegalPackMap = Object.fromEntries(
  Object.entries(LEGAL_PACK_EN).map(([id, doc]) => [
    id,
    {
      title: doc.title,
      subtitle: doc.subtitle,
      summary: doc.summary,
      sections: doc.sections.map((s) => ({
        ...s,
        heading: s.heading,
        paragraphs: s.paragraphs ? [...s.paragraphs] : undefined,
        list: s.list ? { ...s.list, items: s.list.items.map((it) => ({ ...it })) } : undefined,
      })),
    },
  ])
) as unknown as LegalPackMap;

export const LEGAL_PACK_HI: LegalPackMap = Object.fromEntries(
  Object.entries(LEGAL_PACK_EN).map(([id, doc]) => [
    id,
    {
      title: doc.title,
      subtitle: doc.subtitle,
      summary: doc.summary,
      sections: doc.sections.map((s) => ({
        ...s,
        heading: s.heading,
        paragraphs: s.paragraphs ? [...s.paragraphs] : undefined,
        list: s.list ? { ...s.list, items: s.list.items.map((it) => ({ ...it })) } : undefined,
      })),
    },
  ])
) as unknown as LegalPackMap;