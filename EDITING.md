# 网站内容修改指南

日常更新只修改名称以 `-content.json` 结尾的文件，不需要修改 HTML 或 CSS。

| 文件 | 对应页面 |
| --- | --- |
| index-content.json | Bio、研究兴趣、教育和工作经历 |
| publications-content.json | 论文、专利和 DOI 链接 |
| projects-content.json | 项目 |
| teaching-content.json | 教学与指导 |
| contact-content.json | 联系方式 |

## 修改文字

1. 在 GitHub 打开对应 JSON 文件，点击铅笔编辑。
2. 搜索你想修改的原句。
3. 修改 `text` 后面双引号内的文字。
4. 点击 Commit changes 保存到 main；网站会自动更新。

`field` 是定位编号，请保留不动。`page` 是页面名称。

## 修改链接

在 `links` 部分找到对应记录。`label` 是显示文字，`url` 是链接地址。
更新 DOI 时，请同时修改其显示编号和对应的 DOI 链接。

## 格式注意事项

- 保留英文双引号、逗号、方括号和花括号。
- 文字内如需双引号，使用中文引号 “ ”，避免破坏 JSON 格式。
- 不要删除 field，也不要改变它的编号。
- 修改整段文字会使用普通文本显示，原有局部加粗可能消失。
- 此版本适合修改已有条目。新增或删除整篇论文、项目、经历，需要同时调整网页条目；可在原聊天中让我帮你处理。
- GitHub 修改与电脑中的本地预览不会自动同步。

## 恢复错误

GitHub 的 History 中保留每次修改。也可以把刚才改动的文字改回去。
