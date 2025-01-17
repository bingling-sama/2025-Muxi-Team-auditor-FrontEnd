# 木犀审核前端仓库

为木犀产品提供审核后台服务接入

## 项目架构 *Structure*

| 工具              | 用途                   |
| ----------------- | ---------------------- |
| Vite              | 构建项目               |
| vite-plugin-pages | 提供页面路由           |
| Tailwind CSS      | 编写样式               |
| Radix UI          | 提供无头组件用于自定义 |
| Pont              | 接入后端接口           |
| Zustand           | 提供状态管理           |

## 开发 *Development*

```json
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "tsc -b && vite build", // 打包项目
    "lint": "eslint .", // 检查语法错误与代码风格
    "preview": "vite preview" // 启动预览生产服务
  },
```

## 路由 *Routes*

本项目路由由 `vite-plugin-pages` 提供，根据 `src/pages` 下的文件结构生成路由路径。

> TODO: show off routes after impl pages

## 组件 *Components*

本项目组件参考 [shadcn/ui](https://ui.shadcn.com/)，使用 [Radix UI](https://www.radix-ui.com/) 作为无头组件库开发。

```txt.\src\components\
|-- CrazyToggle.tsx
|-- ImageButton.tsx
|-- SearchInput.tsx
|-- Sidebar.tsx
|-- StatusCheckbox.tsx
|-- TagCheckbox.tsx
`-- ui
    |-- Button.tsx
    |-- Calendar.tsx
    |-- Checkbox.tsx
    |-- Icon.tsx
    |-- Input.tsx
    |-- Pagination.tsx
    |-- Separator.tsx
    |-- Sheet.tsx
    |-- Toggle.tsx
    `-- Tooltip.tsx
```

`components/ui` 下直接存放的是经过自定义的 shadcn/ui 组件，与 shadcn/ui 组件用法大体上一致，但 variants 具有较大差异，建议阅读源码/注释后再使用。

`components` 下存放的是项目特有的自定义组件，同样使用 Radix UI 无头组件库构建，但因其仅作为设计稿实现产物，故不具有参考价值。

## 迭代点 *TODOS*

项目目前还比较早期，还有诸多需要完善的部分，这里列出几个目前难以优化但后期可以尝试的大方向：

- TailwindCSS 自定义全局 CSS 变量：目前项目的自定义颜色均硬编码于 TailwindCSS classes 中，后续可以通过调整、整理颜色的方式，将项目所使用的颜色进行统一。此迭代点不仅有利于项目增强代码可读性与可维护性，也可以为后续开发暗色模式或更多自定义主题提供方便。
- 更新 `react-day-picker` 到最新版本：`react-day-picker` 目前版本为 8.10.0，而最新版本为 9.0.0，后者在样式上进行了较大更新，且支持了更多功能，可以考虑更新。
- Unknown
