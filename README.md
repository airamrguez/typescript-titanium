
Typescript Titanium
===================

This repository contains ambient declarations files of
[Titanium Mobile](https://github.com/appcelerator/titanium_mobile) API
([Appcelerator](http://www.appcelerator.com/)) for
[TypeScript](http://www.typescriptlang.org/).

- Updated to Support TypeScript 1.6.2

To Build
--------
```
tsc build.ts --module commonjs
```

Current Version
---------

**Titanium Mobile - 5.5.0.GA**

**Alloy - 1.7.8**

Creating Your Own Ambient Declaration File
------------------------------------------

To create a custom ambient declaration version of titanium API you have to
generate a [JSCA](https://wiki.appcelerator.org/display/tis/JSCA+1.0+Specification)
file from [Titanium repository](https://github.com/appcelerator/titanium_mobile).
This can be done by `docgen.py` at `apidoc` folder. Then you can execute
`build.ts` to get an ambient declaration file.

```
tsc build.ts && node build.js path-to-jsca "info-text" > path-to-d.ts
```
