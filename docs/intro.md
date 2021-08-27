---
sidebar_position: 1
---

# PHP 爬虫

## 重要说明

目前

1. 只适用于 `帝国 CMS`。
2. 没有 Web UI 界面，就是单纯写配置在 PHP 文件中。

## 为什么写这个

因笔者工作要求，需要把火车头采集器改为 PHP 执行，所以使用了 Laravel，然后代码写多了，封装了下，就有了这个库。

## 功能

1. 使用 Xpath 采集站点
2. 数据加工
3. 发布内容
   1. 文字：发送采集到的数据到 `帝国 CMS` 的免登陆发布地址
   2. 图片：不是像第 2 那样 POST 数据，而是需要把这个程序放在和目标站同一服务器中，它会下载图片到 `帝国 CMS` 目录下。

## 快速开始

```shell

git clone https://github.com/likunyan/spider-api
mkdir cache
chmod 777 cache
```

## 基础配置

需要采集的站点，放在 configs/sites/ 下，名字自取，但是后续执行命令的时候，需要根据这个文件名来执行。 假如需要采集 example.com，那么可以取名为 example.php，然后执行 `php artisan example`

### 配置文件范例

```php
<?php

return [
    'task' => [
        [
            'name' => '文章',
            'url' => 'http://www.example.com',
        ],
    ],
];
```
