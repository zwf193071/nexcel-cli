![nexcel Logo](./logo.png)

# NEXCEL
A light tool to read/write xls.

# Installation
```
npm install nexcel-cli -g
```
or
```
git clone https://github.com/zwf193071/nexcel-cli.git

cd nexcel-cli && npm install

npm link
```

# Usage
Open your terminal and type `nexcel` or `nexcel -h` , you'll see the help infomation below:
```
  Usage: nexcel <command>

  Options:

    -V, --version  output the version number
    -h, --help     output usage information

  Commands:

    write|w        write data into excel
    read|r         read excel data
```

<!-- ## 特别声明
>  本cli参考了jrainlau的scion工具，源码地址位：https://github.com/jrainlau/scion  如有侵权，请联系我删除。 -->

# Commands
### write | w
This command would help you to create the xls file with data.
```
$ nexcel w

┌────────────┬────────┬─────┐
│ name       │ sex    │ age │
├────────────┼────────┼─────┤
│ Lucy Twins │ female │ 20  │
├────────────┼────────┼─────┤
│ Mike Brute │ male   │ 21  │
└────────────┴────────┴─────┘
✔ New result.xls has been created successfully!

```


### read | r
This command would help you to read the xls file you specified.
```
? Choose the xls file to read in the root directory result
? Choose the xls file to read in the root directory result
┌────────────┬────────┬─────┐
│ name       │ sex    │ age │
├────────────┼────────┼─────┤
│ Lucy Twins │ female │ 20  │
├────────────┼────────┼─────┤
│ Mike Brute │ male   │ 21  │
└────────────┴────────┴─────┘
✔ result.xls has been read successfully!

```

# License
MIT.









