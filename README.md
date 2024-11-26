# Nextjs Nextra Starter

[![Deploy](https://img.shields.io/badge/passing-black?style=flat&logo=Vercel&label=Vercel&color=3bb92c&labelColor=black)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments)
[![GitHub Workflow Status (branch)](https://img.shields.io/badge/passing-black?style=flat&label=build&color=3bb92c)](https://github.com/pdsuwwz/nextjs-nextra-starter/deployments/Production)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/nextjs-nextra-starter?color=466fe8)](https://github.com/pdsuwwz/nextjs-nextra-starter/blob/main/LICENSE)

⚡️ 快速模板 Starter Template - Next.js + Nextra + TypeScript + TailwindCSS + Shadcn UI

## 🎉 Features

- ⚡️ **Next.js + TypeScript**: 高效的 React 框架和类型安全支持
- 🎨 **Tailwind CSS**: 原子化 CSS, 快速构建自定义、响应式界面 UI
- 🧩 **Shadcn UI**: 高度可定制的 UI 组件集合，无需安装额外依赖
- 📚 **Nextra v3**: 基于 Next.js 的静态站点生成器，专为文档而优化
- 🛠️ **ESLint**: 统一编码风格和最佳实践
- ⛅ **轻量化设计**: 精简项目设置，专注于内容编写

## 运行效果

![image](https://github.com/user-attachments/assets/b28a58c5-91c3-4cbe-b047-1e56c5fcb270)

## 关于GitHub Action

- Action存放在.github/workflows文件夹下的yml文件中
- Action可以触发项目中的python脚本
- python脚本生成的新文件又可以通过action push到项目代码中
- 项目代码的变更触发Vercel部署，完成整体的网站内容自动更新

配置：

- 要配置各种环境变量到项目的Action Settings Genera中
- 要设置项目的Action有读写权限，在仓库Setting中设置

[原始模板项目](https://nextjs-nextra-starter-green.vercel.app)
